# frozen_string_literal: true

require_relative 'timestampable'
require_relative 'address'

# Original Customer Entity model without active-record
class Customer
  include Timestampable

  attr_accessor :email, :name
  attr_reader :addresses, :created_at, :updated_at

  def initialize(email: nil, name: nil)
    @email = email
    @name = name
    @addresses = []
    @address = nil
    update_timestamps
  end

  def address
    @address ||= addresses.last
  end

  def create_address(address_attributes = {})
    @address = Address.new(address_attributes)
    addresses.push(@address)
    update_timestamps
    @address
  end

  def update_address(address_attributes = {})
    @address = address.dup
    @address.attributes = address_attributes
    addresses.push(@address)
    update_timestamps
    @address
  end

end
