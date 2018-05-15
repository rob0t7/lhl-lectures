import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import Button from "../Button";

import Summary from "./Summary";
import Items from "./Items";

const ShoppingCartWrapper = glamorous.div({
  display: "grid",

  gridTemplateAreas: `
    "Title TopActions"
    "Items Items"
    ". Summary"
    ". BottomActions"
  `
});

const TopActions = glamorous.div({
  gridArea: "TopActions"
});

const BottomActions = glamorous.div({
  gridArea: "BottomActions"
});

const ShoppingCart = ({
  items,
  subtotalCents,
  shippingCents,
  taxCents,
  onQuantityChange
}) => (
  <ShoppingCartWrapper>
    <h1 style={{ gridArea: "Title" }}>Shopping Cart</h1>

    <TopActions>
      <Button href="#checkout">Checkout</Button>
    </TopActions>

    <Items />

    <Summary />

    <BottomActions>
      <Button href="#checkout">Checkout</Button>
    </BottomActions>
  </ShoppingCartWrapper>
);

export default ShoppingCart;
