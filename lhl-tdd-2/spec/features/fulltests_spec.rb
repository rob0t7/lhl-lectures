require 'rails_helper'

RSpec.feature "Fulltests", type: :feature do
  scenario 'it all works', js: true do
    beer = FactoryBot.create(:beer)
    visit '/'
    expect(page).to have_content beer.name
  end

  scenario 'Add new beer', js: true do
    beer = FactoryBot.attributes_for(:beer)

    visit '/'
    click_link 'New Beer'

    fill_in :name, with: beer['name']
    fill_in :style, with: beer['style']
    fill_in :abv, with: beer['abv']
    click_button 'Create'

    expect(page).to have_content(beer['name'])

  end
end
