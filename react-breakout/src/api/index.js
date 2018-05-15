export const changeQuantity = (shoppingCart, productId, quantity) => {
  const { items } = shoppingCart;

  const itemIndex = items.findIndex(({ id }) => {
    return id === productId;
  });

  const item = { ...items[itemIndex], quantity };

  const newItems = [
    ...items.slice(0, itemIndex),
    item,
    ...items.slice(itemIndex + 1)
  ];
  const subtotalCents = newItems.reduce((total, item) => {
    return total + item.quantity * item.priceCents;
  }, 0);
  const taxCents = subtotalCents + shoppingCart.shippingCents;

  return { ...shoppingCart, items: newItems, subtotalCents, taxCents };
};
