# frozen_string_literal: true

# Customer Entity Model
class Customer < ActiveRecord::Base
  has_many :addresses # this also stores historical addresses
  has_many :orders

  validates :name, presence: true
  validates :email, format: { with: /\A[a-z\.\+_\d]+@\w+\.\w+\z/i },
            uniqueness: true
  validate :old_enough_validator

  # make sure all emails are lowercase
  def email=(email)
    super(email.downcase)
  end

  def address
    @address ||= addresses.last
  end

  def create_address(attrs = {})
    transaction do
      @address = addresses.create!(attrs)
      touch #update updated_at column on Customer
      save!
    end
  end

  def update_address(attrs = {})
    transaction do
      @address = address.dup
      @address.attributes = attrs
      @address.save!
      touch # update updated_at column on Customer
      save!
    end
  end

  def create_order
    orders.create(date: DateTime.current)
  end

  private

  def old_enough_validator
    if dob > 19.years.ago
      errors.add(:dob, 'Must be 19 or older')
    end
  end
end
