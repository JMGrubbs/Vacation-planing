class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :foodTypes
      t.string :address
      t.string :hours
      t.string :popularFoods

      t.timestamps
    end
  end
end
