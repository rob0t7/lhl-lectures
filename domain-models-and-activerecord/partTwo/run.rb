require_relative 'lib/setup'

puts "Running Demo program"

puts "Create a bunch of customers"

1.upto(10) do
  Customer.create!(name: Faker::Name.name, email: Faker::Internet.email, dob: 20.years.ago)
end

puts "Create the bob customer (in domain layer only)"

bob = Customer.new(name: 'Bob', email: 'bob@example.com', dob: 50.years.ago)

puts "Sync bob to DB (i.e. INSERT call)"
bob.save

puts 'Add address for Bob'
bob.create_address(street_address: '46 Spadina', city: 'Toronto')

puts 'Update address for Bob since Bob moved (Creates a new address db record)'
bob.update_address(street_address: '123 St George St.')

puts "Update Bob's email"
bob = Customer.find_by_email!('bob@example.com')
bob.update!(email: 'bob2@example.com')

puts "Remove Bob"
bob = Customer.find_by_email!('bob2@example.com')
bob.destroy!

Product.create!(name: Faker::Commerce.name, description: Faker::Lorem.paragraph, price_cents: 10000)
