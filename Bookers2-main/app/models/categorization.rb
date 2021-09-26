class Categorization < ApplicationRecord
  belongs_to :tag
  belongs_to :top_tag
end
