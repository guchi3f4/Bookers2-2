class Book < ApplicationRecord
  belongs_to :user
  has_many :post_comments, dependent: :destroy
  has_many :favorites, dependent: :destroy

  has_many :tag_maps, dependent: :destroy
  has_many :tags, through: :tag_maps


  def favorited_by?(user)
    favorites.where(user_id: user.id).exists?
  end


  def save_tag(sent_tags)
    if self.tags.present?
      TagMap.where(book_id: self.id).destroy_all
    end

    tags = Tag.pluck(:tag_name)
    new_tags = sent_tags - tags
    new_tags.each do |tag|
      Tag.where(tag_id: tag.id).first_or_create
    end

    tag_list = Tag.where(tag_name: sent_tags)
    tag_list.each do |tag|
      TagMap.create(book_id: self.id, tag_id: tag.id)
    end
  end

  validates :title, presence: true
  validates :body,
    presence: true,
    length: { maximum: 200 }
end
