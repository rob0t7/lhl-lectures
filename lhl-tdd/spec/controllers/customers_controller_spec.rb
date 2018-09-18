require 'rails_helper'

RSpec.describe CustomersController, type: :request do
  describe 'GET /customers' do
    let(:customers) { [FactoryBot.build(:customer), FactoryBot.build(:customer)] }

    before do
      allow(Customer).to receive(:customers_in_alphabetical_order).and_return(customers)
      get customers_path
    end

    it 'return a status of 200' do
      expect(response).to have_http_status(:ok)
    end

    it 'retrieve all the customers in alphabetical order' do
      expect(Customer).to have_received(:customers_in_alphabetical_order)
    end
  end

  describe '#new' do
    it 'returns the form successfully' do
      get new_customer_path
      expect(response).to have_http_status(:ok)
    end
  end

  describe '#create' do
    let(:customer_params) { customer_mock.attributes }
    let(:customer_mock) { FactoryBot.build_stubbed(:customer) }

    context 'when the customer is valid' do
      before do
        allow(Customer).to receive(:new).and_return(customer_mock)
        allow(customer_mock).to receive(:save).and_return(true)
        post customers_path, params: {customer: customer_params}
      end

      it 'redirect to the customer path' do
        expect(response).to redirect_to(customers_path)
      end

      it 'sets the flash message' do
        expect(flash.notice).to eq "Successfully added #{customer_mock.name}."
      end

      it 'create a new customer object' do
        expected_params = ActionController::Parameters.new(
            name: customer_mock.name,
            email: customer_mock.email,
            birthday: customer_mock.birthday
        )
        expected_params.permit!
        expect(Customer).to have_received(:new)
                              .with(expected_params)
      end

      it 'addes the customer to the DB' do
        expect(customer_mock).to have_received(:save)
      end
    end
    context 'when the customer is invalid' do

      before do
        allow(Customer).to receive(:new).and_return(customer_mock)
        allow(customer_mock).to receive(:save).and_return(false)
        post customers_path, params: {customer: customer_params}
      end

      it 'renders the form again' do
        expect(response).to have_http_status(:ok)
      end

      it 'sets the flash error message' do
        expect(flash.alert).to eq "Error creating customer."
      end
    end
  end
end
