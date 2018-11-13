class CreateVacations < ActiveRecord::Migration[5.2]
  def change
    create_table :vacations do |t|
      t.string :name
      t.integer :location_id
      t.text :sites
      t.text :events
      t.timestamps
    end
  end
end
