class TagRelation < ApplicationRecord
  belongs_to :tag
  belongs_to :top_tag
end
