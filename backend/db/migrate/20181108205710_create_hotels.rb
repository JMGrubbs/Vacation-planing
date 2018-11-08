class CreateHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :meals
      t.integer :rating
      t.boolean :pool

      t.timestamps
    end
  end
end
