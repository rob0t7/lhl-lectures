class BeersController < ApplicationController
  def index
    @beers = Beer.all
  end

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show, status: :created
    else
      render json: {errors: @beer.errors.messages}.as_json, status: :bad_request
    end
  end

  private

  def beer_params
    params.require(:beer).permit(:name, :style, :abv)
  end
end
