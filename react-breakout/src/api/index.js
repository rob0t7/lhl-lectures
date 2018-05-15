export const changeQuantity = (shoppingCart, productId, quantity) => {
  const { items } = shoppingCart;

  const itemIndex = items.findIndex(({ id }) => {
    return id === productId;
  });

  let newItems;
  if (quantity > 0) {
    const item = {
      ...items[itemIndex],
      quantity,
      totalCents: items[itemIndex].priceCents * quantity
    };

    newItems = [
      ...items.slice(0, itemIndex),
      item,
      ...items.slice(itemIndex + 1)
    ];
  } else {
    newItems = [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];
  }

  const subtotalCents = newItems.reduce((total, item) => {
    return total + item.totalCents;
  }, 0);
  const taxCents = subtotalCents + shoppingCart.shippingCents;
  const totalCents = subtotalCents + shoppingCart.shippingCents + taxCents;
  return {
    ...shoppingCart,
    items: newItems,
    subtotalCents,
    taxCents,
    totalCents
  };
};
