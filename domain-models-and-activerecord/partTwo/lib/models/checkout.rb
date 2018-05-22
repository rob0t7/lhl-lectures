class Checkout
  attr_reader :cart, :customer
  def initialize(customer)
    @customer = customer
    @cart = customer.current_cart
  end

  def add_item(product)
    cart.add_item(product)
  end

  def add_payment_info(credit_card)
    cart.credit_card = credit_card
  end

  def purchase
    payment_gateway.process_payment()
    cart.add_payment(payment_gateway.payment)
    receipt_mailer.send()
  end

  private

  def payment_gateway
    @payment_gateway ||= PaymentGateway.new(cart)
  end

  def receipt_mailer
    ReceiptMailer.new(cart)
  end

end
