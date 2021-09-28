class BooksController < ApplicationController
  before_action :ensure_correct_user, only: [:edit, :update, :destroy]

  def create
    @top_tag = TopTag.find_or_create_by(name: params[:name])
    @book = Book.new(params_book)
    @book.user = current_user
    if @book.save
      sent_tags = params[:book][:tag_name].split(',')
      @book.save_tag(sent_tags)

      redirect_to book_path(@book)
      flash[:notice] = "You have created book successfully."
    else
      @books = Book.order(id: 'DESC').page(params[:page]).per(10)
      render :index
    end
  end

  def edit
    @tag_list = @book.tags.pluck(:tag_name)
  end

  def update
    if @book.update(params_book)
      sent_tags = params[:book][:tag_name].split(',')
      @book.save_tag(sent_tags)

      redirect_to book_path(@book)
      flash[:notice] = "You have updated book successfully."
    else
      render :edit
    end
  end

  def index
    @ids = [55, 19, 44]
    Book.where(id: @ids).order("field(id, #{@ids.join(',')})")
    Book.where(id: @ids).order([Arel.sql('field(id, ?)'), @ids]).each do |u| pp u.id end
    byebug
    @book = Book.new
    @all_tags = Tag.pluck(:tag_name)
    #ソート機能
    if params[:sort] == "favorite_desc"
      @books = Book.all.sort{|a,b|
        b.favorites.where(created_at: set_week).size <=>
        a.favorites.where(created_at: set_week).size
      }
    elsif params[:tag]
      @tag = Tag.find_by(tag_name: params[:tag])
      @books = @tag.books.page(params[:page]).per(10)
    elsif params[:content].present?
      @tag_names = params[:content].split(',')
      @tags = Tag.where(tag_name: @tag_names)
      if @tag_names.count == 1
        if params[:page_flag].present?
          @tag = Tag.find_by(tag_name: params[:content])
          @books = @tag.books.page(params[:page]).per(7)
        else
          @top_tag = TopTag.find_by(name: params[:content])
          @books = @top_tag.books.page(params[:page]).per(7)
        end
      else
        @tag_maps = TagMap.where(tag_id: @tags)
        @book_ids = @tag_maps.pluck(:book_id)
        if params[:page_flag].present?
          itself_book_ids  = @book_ids.group_by(&:itself)
          hash_book_ids = itself_book_ids.map{ |key, value| [key, value.count] }.to_h
          sort_ids = hash_book_ids.sort {|(_, v1), (_, v2)| v2 <=> v1 }.to_h
          # @aaa = Book.where(id: sort_ids.keys).order(Arel.sql("FIELD(id, #{sort_ids.keys.join(',')})"))
        else
          @uniq_book_ids = @book_ids.select{ |e| @book_ids.count(e) >= @tag_names.count  }.uniq
          @books = Book.where(id: @uniq_book_ids).page(params[:page]).per(1)
        end
      end
      @results = @tags.all.map do |tag|
        { tag: tag.tag_name, count: tag.books.count }
      end
      render 'layouts/side_index'
      # render {@books}
    elsif params[:sort].present?
      @books = Book.order(params[:sort]).page(params[:page]).per(7)
    else
      @books = Book.order(id: 'DESC').page(params[:page]).per(7)
      @results = Tag.all.map do |tag|
        { tag: tag.tag_name, count: tag.books.count }
      end
    end

    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @book = Book.find(params[:id])
    @user = @book.user
    @book_tags = @book.tags
    unless @book.user_id == current_user.id
      @book.book_count += 1
      @book.save
    end
    @post_comment = PostComment.new

    unless @user == current_user
      other_user_rooms = @user.entries.pluck(:room_id)
      @entry = Entry.find_by(user_id: current_user, room_id: other_user_rooms)
      if @entry.present?
        @room = @entry.room
      else
        @new_room = Room.new
      end
    end
  end

  def destroy
    @book.destroy
    redirect_to books_path
  end

  private

  def params_book
    params.require(:book).permit(:title, :body, :evaluation).merge(top_tag_id: @top_tag.id)
  end

  def ensure_correct_user
    @book = Book.find(params[:id])
    unless @book.user == current_user
      redirect_to books_path
    end
  end

  def set_week
    Time.current.ago(6.days)..Time.current
  end
end
