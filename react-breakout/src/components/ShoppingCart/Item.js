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

const Item = () => (
  <Wrapper>
    <Div gridArea="Name">product</Div>
    <Div gridArea="Price" textAlign="right">
      {numeral(1000 / 100).format(MONEY_FORMAT)}
    </Div>
    <QuantityField />
    <Div gridArea="Total" textAlign="right">
      {numeral(1000 * 1 / 100).format(MONEY_FORMAT)}
    </Div>
  </Wrapper>
);

export default Item;
