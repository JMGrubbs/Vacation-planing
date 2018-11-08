class CreateHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels do |t|
      t.string :name
      t.boolean :pool
      t.string :meals
      t.integer :rating

      t.timestamps
    end
  end
end
