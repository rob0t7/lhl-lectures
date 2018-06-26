require 'rails_helper'

RSpec.describe BeersController, type: :request do
  describe '#index' do
    let!(:beers) { [FactoryBot.create(:beer), FactoryBot.create(:beer) ] }
    let(:expected_json) do
      beers.map do |beer|
        {id: beer.id, name: beer.name, style: beer.style, abv: beer.abv.to_s}
      end
    end

    before do
      get '/api/beers'
    end

    it 'returns a status code of 200' do
      expect(response).to have_http_status(:ok)
    end

    it 'returns content_type == application/json' do
      expect(response.content_type).to eq 'application/json'
    end

    it 'fetches all the beers as json' do
      expect(
        JSON.parse(response.body, symbolize_names: true)[:beers]
      ).to match_array(expected_json)
    end
  end

  describe '#create' do
    let(:params) do
      {
        beer: {
          name: Faker::Beer.name,
          style: Faker::Beer.style,
          abv: Faker::Beer.alcohol
        }
      }
    end

    context 'with valid attributes' do
      it 'returns a 201 response' do
        post '/api/beers', params: params
        expect(response).to have_http_status(:created)
      end

      it 'saves the record into the DB' do
        expect {
          post '/api/beers', params: params
        }.to change {Beer.count }.by(1)
      end

      it 'returns the beer as a JSON object' do
        post '/api/beers', params: params
        beer = Beer.last
        expect(
          JSON.parse(response.body, symbolize_names: true)
        ).to eq( beer:
               {
                 id: beer.id,
                 name: beer.name,
                 style: beer.style,
                 abv: beer.abv.to_s
               }
             )
      end
    end

    context 'with invalid attributes' do
      let(:params) do
        {
          beer: {
            name: '',
            style: Faker::Beer.style,
            abv: Faker::Beer.alcohol
          }
        }
      end

      it 'returns a 406 response' do
        post '/api/beers', params: params
        expect(response).to have_http_status(:bad_request)
      end

      it 'does not save the record to the DB' do
        expect {
          post '/api/beers', params: params
        }.not_to change { Beer.count }
      end

      it 'returns an error message' do
        post '/api/beers', params: params
        expect(
          JSON.parse(response.body, symbolize_names: true)
        ).to eq({errors: {:name=>["can't be blank"]}})
      end
    end
  end
end
