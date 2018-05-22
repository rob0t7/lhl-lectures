require 'active_record'
require 'faker'
require 'pry'

require_relative 'models/customer'
require_relative 'models/address'
require_relative 'models/product'
require_relative 'models/order'

ActiveRecord::Base.logger = ActiveSupport::Logger.new(STDOUT)

ActiveRecord::Base.establish_connection(
  adapter: 'postgresql',
  database: 'lhl-domain-models',
)

ActiveRecord::Schema.define do
  create_table :customers, force: true do |t|
    t.string :name
    t.string :email
    t.timestamps
  end

  add_column :customers, :dob, :datetime

  create_table :addresses, force: true do |t|
    t.references :customer
    t.string :street_address
    t.string :city
    t.timestamps
  end

  create_table :products, force: true do |t|
    t.string :name
    t.text :description
    t.integer :price_cents
    t.timestamps
  end

  create_table :orders, force: true do |t|
    t.timestamp :date
    t.references :customer
    t.timestamps
  end

  #create_join_table :products, :orders, force: true

  create_table :order_items, force: true do |t|
    t.references :order
    t.references :product
    t.integer :price_cents
    t.integer :quantity
    t.timestamps
  end
  # create_table :orders_products do |t|
  #   t.references :order
  #   t.references :products
  # end
end
