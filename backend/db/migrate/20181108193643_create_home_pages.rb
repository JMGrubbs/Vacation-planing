class CreateHomePages < ActiveRecord::Migration[5.2]
  def change
    create_table :home_pages do |t|
      t.string :something

      t.timestamps
    end
  end
end
