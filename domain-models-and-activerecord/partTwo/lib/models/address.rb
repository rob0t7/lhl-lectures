# frozen_string_literal: true

# An address Value Object
class Address < ActiveRecord::Base
  belongs_to :customer

  validates :street_address, presence: true
  validates :city, presence: true
end
