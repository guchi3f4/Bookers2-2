class BooksController < ApplicationController
  before_action :ensure_correct_user, only: [:edit, :update, :destroy]

  def create
    @top_tag = TopTag.find_or_create_by(name: params[:name])
    @book = Book.new(params_book)
    @book.user = current_user
    if @book.save
      sent_tags = params[:book][:tag_name].split(',')
      @tag_maps = @book.save_tag(sent_tags)

      @tag_relations = @tag_maps.map do |tag_map|
        @top_tag.tag_relations.find_or_create_by(tag_id: tag_map.tag_id)
      end
      @tag_relations.map do |tag|
        tag.update(registration_num: tag.registration_num += 1)
      end
      # TagRelation.update_all(registration_num: registration_num += 1)
      # @tag_relations.update_all("registration_num = registration_num + 1")

      redirect_to book_path(@book)
      flash[:notice] = "You have created book successfully."
    else
      @books = Book.order(id: 'DESC').page(params[:page]).per(10)
      render :index
    end
  end

  def edit
    @tag_list = @book.tags.pluck(:tag_name)
    @top_tag = @book.top_tag
  end

  def update
    # @before_top_tag = @book.top_tag
    # if @before_top_tag.present?
    #   @before_tag_relations = @before_top_tag.tag_relations.where(tag_id: @book.tags)
    #   if @before_tag_relations.present?
    #     @before_tag_relations.map do |relation|
    #       relation.update(registration_num: relation.registration_num -= 1)
    #     end
    #   end
    # end
    @top_tag = TopTag.find_or_create_by(name: params[:name])
    sent_tags = params[:book][:tag_name].split(',')
    if @book.update(params_book)
      @before_top_tag = @book.top_tag
      if @before_top_tag.present?
        @before_tag_relations = @before_top_tag.tag_relations.where(tag_id: @book.tags)
        if @before_tag_relations.present?
          @before_tag_relations.map do |relation|
            relation.update(registration_num: relation.registration_num -= 1)
          end
        end
      end
      # @tag_maps = @book.save_tag(sent_tags)
      if @book.tags.present?
        TagMap.where(book_id:  @book.id).destroy_all
      end

      @tag_maps = sent_tags.map do |tag|
        book_tag = Tag.find_or_create_by(tag_name: tag)
        @book.tag_maps.find_or_create_by(tag_id: book_tag.id)
      end

      @tag_relations = @tag_maps.map do |tag_map|
        @top_tag.tag_relations.find_or_create_by(tag_id: tag_map.tag_id)
      end
      @tag_relations.map do |tag|
        tag.update(registration_num: tag.registration_num += 1)
      end
      redirect_to book_path(@book)
      flash[:notice] = "You have updated book successfully."
    else
      render :edit
    end
  end

  def index
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
        @tag = Tag.find_by(tag_name: params[:content])
        @top_tag = TopTag.find_by(name: params[:content])
        if params[:page_flag] == 'change2'
          @books = @tag.books.page(params[:page]).per(7)
        else
          @books = @top_tag.books.page(params[:page]).per(7)
        end
        top_tag_results = @top_tag.tag_relations.all.map do |relation|
        { tag: relation.tag.tag_name, count: relation.registration_num}
        end
        @tag.tag_relations.all.map do |relation|
          top_tag_results << { tag: relation.top_tag.name, count: relation.registration_num}
        end
        @results = top_tag_results.uniq
      else
        @tag_maps = TagMap.where(tag_id: @tags)
        @book_ids = @tag_maps.pluck(:book_id)
        if params[:page_flag] == 'change4'
          itself_book_ids  = @book_ids.group_by(&:itself)
          hash_book_ids = itself_book_ids.map{ |key, value| [key, value.count] }.to_h
          select_book_ids = hash_book_ids.select {|key, value| value >= 2 }
          sort_ids = seclect_book_ids.sort {|(_, v1), (_, v2)| v2 <=> v1 }.to_h
          books = Book.where(id: sort_ids.keys).sort_by{ |a| sort_ids.keys.index(a.id)}
          @books = Kaminari.paginate_array(books).page(params[:page]).per(7)
        else
          @uniq_book_ids = @book_ids.select{ |e| @book_ids.count(e) >= @tag_names.count  }.uniq
          @books = Book.where(id: @uniq_book_ids).page(params[:page]).per(2)
        end
        @tag_relations = TagRelation.where(tag_id: @tags)
        @top_tags = @tag_relations.all.map do |relation|
          relation.top_tag
        end
        @uniq_top_tags  = @top_tags.uniq
        @results = @uniq_top_tags.map do |top_tag|
          { tag: top_tag.name, count: top_tag.books.count }
        end
      end
      # render {@books}
    elsif params[:sort].present?
      @books = Book.order(params[:sort]).page(params[:page]).per(7)
    else
      @books = Book.order(id: 'DESC').page(params[:page]).per(7)
      @results = Tag.all.map do |tag|
        { tag: tag.tag_name, count: tag.books.count }
      end
    end
    # respond_to do |format|
    #   format.html
    #   format.js
    # end
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
