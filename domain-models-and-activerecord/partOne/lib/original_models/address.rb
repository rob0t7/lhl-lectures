# frozen_string_literal: true

require_relative 'timestampable'

# Address value object
# Note addresses don't have back references to Customer like using AR
class Address
  include Timestampable

  attr_accessor :street_address, :city
  attr_reader :created_at, :updated_at

  def initialize(street_address: nil, city: nil)
    @street_address = street_address
    @city = city
    update_timestamps
  end

  def attributes=(street_address: nil, city: nil)
    @street_address = street_address if street_address
    @city = city if city
    update_timestamps
    self
  end

  # This function uses some metaprogramming. Beware
  def dup
    new_address = super
    new_address.instance_variable_set(:@created_at, nil)
    new_address.send(:update_timestamps)
    new_address
  end
end
