class Tag < ApplicationRecord
  has_many :tag_maps, dependent: :destroy
  has_many :books, through: :tag_maps
  
  has_many :categorizations, dependent: :destroy
  has_many :top_tags, through: :categorizations
end
