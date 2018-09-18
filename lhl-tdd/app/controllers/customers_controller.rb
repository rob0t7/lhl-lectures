class CustomersController < ApplicationController
  def index
    @customers = Customer.customers_in_alphabetical_order
  end

  def new
    @customer = Customer.new
  end

  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      flash.notice = "Successfully added #{@customer.name}."
      redirect_to customers_path
    else
      flash.now.alert = "Error creating customer."
      render :new
    end
  end

  private

  def customer_params
    params.require(:customer).permit(
      :name,
      :email,
      :birthday
    )
  end
end
