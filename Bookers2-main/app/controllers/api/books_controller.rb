class Api::BooksController < ApplicationController
  def index
    if params[:content].present?
      content = params[:content]
      @books = Book.where(["title LIKE ?", "%#{content}%"])
    else
      @books = Book.all
    end
    render 'index', formats: 'json', handlers: 'jbuilder'
  end
end
