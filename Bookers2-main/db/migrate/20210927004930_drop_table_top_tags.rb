class DropTableTopTags < ActiveRecord::Migration[5.2]
  def change
    drop_table :top_tags
  end
end
