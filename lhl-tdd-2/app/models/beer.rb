class Beer < ApplicationRecord
  validates :name, :style, :abv, presence: true
end
