class CreateLocationHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :location_hotels do |t|
      t.integer :location_id
      t.ineger :hotel_id

      t.timestamps
    end
  end
end
