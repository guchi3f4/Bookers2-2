class Book < ApplicationRecord
  belongs_to :user
  has_many :post_comments, dependent: :destroy
  has_many :favorites, dependent: :destroy

  has_many :tag_maps, dependent: :destroy
  has_many :tags, through: :tag_maps

  belongs_to :top_tag


  def favorited_by?(user)
    favorites.where(user_id: user.id).exists?
  end


  def save_tag(sent_tags)
    if self.tags.present?
      TagMap.where(book_id: self.id).destroy_all
    end

    sent_tags.map do |tag|
      book_tag = Tag.find_or_create_by(tag_name: tag)
      self.tag_maps.find_or_create_by(tag_id: book_tag.id)
    end
  end

  validates :title, presence: true
  validates :body,
    presence: true,
    length: { maximum: 200 }
end
