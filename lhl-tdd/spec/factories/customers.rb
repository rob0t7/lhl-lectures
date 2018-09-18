FactoryBot.define do
  factory :customer do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    birthday { Faker::Date.birthday }
  end
end
