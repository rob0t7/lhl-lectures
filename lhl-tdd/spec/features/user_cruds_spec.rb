require 'rails_helper'

RSpec.feature "UserCruds", type: :feature do
  scenario "As an admin I want to see all the customers of the system", js: true do
    # create a customer in the DB
    customer1 = FactoryBot.create(:customer)
    customer2 = FactoryBot.create(:customer)

    # visit the index action
    visit root_path

    # assert the customer name is on the page
    expect(page).to have_content(customer1.name)
    expect(page).to have_content(customer2.name)
  end

  scenario "As an admin I want to add a new customer", js: true do
    visit root_path
    click_link 'Add Customer'

    fill_in :customer_name, with: 'Jane Doe'
    fill_in :customer_email, with: 'jane@example.com'
    select '1', from: :customer_birthday_3i
    select 'May', from: :customer_birthday_2i
    select '1990', from: :customer_birthday_1i
    click_button 'Create Customer'

    expect(page).to have_content "Jane Doe"
    expect(page).to have_content 'jane@example.com'
    expect(page).to have_content "Successfully added Jane Doe."
  end
end
