class TopTag < ApplicationRecord
  has_many :books

  has_many :categorizations, dependent: :destroy
  has_many :tags, through: :categorizations
end
