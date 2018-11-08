class CreateLocationSites < ActiveRecord::Migration[5.2]
  def change
    create_table :location_sites do |t|
      t.integer :location_id
      t.integer :site_id

      t.timestamps
    end
  end
end
