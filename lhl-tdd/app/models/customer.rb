class Customer < ApplicationRecord
  validates :name, presence: true

  def self.customers_in_alphabetical_order
    order(:name)
  end
end
