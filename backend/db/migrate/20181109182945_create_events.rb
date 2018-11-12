class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.integer :location_id
      t.integer :vacation_id

      t.timestamps
    end
  end
end
