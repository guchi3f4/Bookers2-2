class TopTag < ApplicationRecord
  has_many :books

  has_many :tag_relations, dependent: :destroy
  has_many :tags, through: :tag_relations
end
