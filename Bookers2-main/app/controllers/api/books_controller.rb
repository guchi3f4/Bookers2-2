class Api::BooksController < ApplicationController
  def index
    if params[:keyword]
      keyword = params[:keyword]
      tags = Tag.where(["tag_name LIKE ?", "%#{keyword}%"]).pluck(:tag_name)
      render json: tags
    else
      @books = Book.all
      render 'index', formats: 'json', handlers: 'jbuilder'
    end
  end
end
