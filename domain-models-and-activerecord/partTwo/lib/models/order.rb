class Order < ActiveRecord::Base
  belongs_to :customer
  has_many :order_items

  after_update :sendrecipt
  def add_item(product, quantity  = 1)
    order_items.create!(product: product, quantity: quantity, price_cents: product.price_cents)
  end

  def total_price
    order_items.reduce(0) { |total, order_item| total + order_item.total_cents }
  end

  private

  def sendrecipt
    # send receipt
  end
end
