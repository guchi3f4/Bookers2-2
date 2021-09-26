class CreateCategorizations < ActiveRecord::Migration[5.2]
  def change
    create_table :categorizations do |t|
      t.integer :top_tag_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
