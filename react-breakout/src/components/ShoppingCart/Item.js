import React from "react";
import glamorous, { Div } from "glamorous";
import PropTypes from "prop-types";
import numeral from "numeral";

import QuantityField from "./QuantityField";

const MONEY_FORMAT = "$0,0.00";

const Wrapper = glamorous.div({
  display: "grid",

  gridTemplateAreas: `
    "Name Price Quantity Total"
  `,
  gridTemplateColumns: "3fr 1fr 1fr 1fr",
  alignItems: "center",
  gridGap: ".5rem",
  marginBottom: ".5rem"
});

const Item = ({
  id,
  name,
  priceCents,
  quantity,
  totalCents,
  onQuantityChange
}) => (
  <Wrapper>
    <Div gridArea="Name">{name}</Div>
    <Div gridArea="Price" textAlign="right">
      {numeral(priceCents / 100).format(MONEY_FORMAT)}
    </Div>
    <QuantityField
      id={id}
      quantity={quantity}
      onQuantityChange={onQuantityChange}
    />
    <Div gridArea="Total" textAlign="right">
      {numeral(totalCents / 100).format(MONEY_FORMAT)}
    </Div>
  </Wrapper>
);

export default Item;
