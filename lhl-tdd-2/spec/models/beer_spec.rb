require 'rails_helper'

RSpec.describe Beer, type: :model do
  subject(:beer) { FactoryBot.build(:beer) }

  describe '#valid?' do
    it 'has a valid test factory' do
      expect(beer).to be_valid
    end

    context 'without a name' do
      it 'is invalid' do
        beer.name = ''
        expect(beer).to be_invalid
      end
    end

    context 'without a style' do
      it 'is invalid' do
        beer.style = ''
        expect(beer).to be_invalid
      end
    end

    context 'without a abv' do
      it 'is invalid' do
        beer.abv = ''
        expect(beer).to be_invalid
      end
    end
  end
end
