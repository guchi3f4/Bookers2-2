json.array! @books do |book|
  json.extract! book, :title, :body, :book_count, :evaluation
  json.profile book.user.profile_image_id
  json.comment book.post_comments.count
  json.tags do
    json.array! book.tags
  end
  json.favorites book.favorites.count
end