FactoryBot.define do
  factory :beer do
    name { Faker::Beer.name }
    style { Faker::Beer.style }
    abv { Faker::Beer.alcohol }
  end
end
