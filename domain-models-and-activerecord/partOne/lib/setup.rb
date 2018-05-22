require 'active_record'
require 'faker'
require 'pry'

require_relative 'models/customer'
require_relative 'models/address'

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
end
