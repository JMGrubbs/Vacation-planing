class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.integer :rating
      t.string :foodType
      t.string :address
      t.string :hrs

      t.timestamps
    end
  end
end
