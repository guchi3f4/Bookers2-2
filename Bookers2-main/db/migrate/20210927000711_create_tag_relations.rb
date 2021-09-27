class CreateTagRelations < ActiveRecord::Migration[5.2]
  def change
    create_table :tag_relations do |t|
      t.integer :top_tag_id
      t.integer :tag_id
      t.integer :registration_num, default: 0

      t.timestamps
    end
  end
end
