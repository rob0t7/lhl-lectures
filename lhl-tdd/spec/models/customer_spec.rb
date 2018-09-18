require 'rails_helper'

RSpec.describe Customer, type: :model do
  subject { FactoryBot.build(:customer) }

  describe '#valid?' do
    it 'is valid with the valid attrs' do
      expect(subject).to be_valid
    end

    it 'is invalid without a name' do
      subject.name = ""
      expect(subject).to be_invalid
    end
  end

  describe '.customers_in_alphabetical_order' do

    it "returns the list of customers in alphabetica order" do
      customer1 = FactoryBot.create(:customer, name: "Jill")
      customer2 = FactoryBot.create(:customer, name: 'Bob')

      expect(Customer.customers_in_alphabetical_order).to(
        eq([customer2, customer1])
      )
    end

  end
end
