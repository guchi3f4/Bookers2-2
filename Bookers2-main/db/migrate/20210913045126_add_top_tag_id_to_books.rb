class AddTopTagIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :top_tag_id, :integer
  end
end
