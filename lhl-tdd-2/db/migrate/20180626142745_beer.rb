class Beer < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.decimal :abv
      t.timestamps
    end
  end
end
