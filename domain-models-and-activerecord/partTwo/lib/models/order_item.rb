class OrderItem
  belongs_to :order
  belongs_to :product

  def total_cents
    price_cents * quantity
  end
end
