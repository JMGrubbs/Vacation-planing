class CreateVacations < ActiveRecord::Migration[5.2]
  def change
    create_table :vacations do |t|
      t.string :name
      t.integer :location_id
      t.integer :user_id
      t.integer :groupsize
      t.text :sites
      t.text :events
      t.timestamps
    end
  end
end
