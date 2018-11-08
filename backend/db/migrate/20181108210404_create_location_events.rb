class CreateLocationEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :location_events do |t|
      t.integer :event_id
      t.integer :location_id

      t.timestamps
    end
  end
end
