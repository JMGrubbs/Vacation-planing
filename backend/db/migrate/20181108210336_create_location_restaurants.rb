class CreateLocationRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :location_restaurants do |t|
      t.integer :location_id
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
