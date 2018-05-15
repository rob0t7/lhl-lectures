import React from "react";
import glamorous from "glamorous";
import Button from "../Button";

const Wrapper = glamorous.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center"
});

const LeftButton = glamorous(Button)({
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px"
});

const RightButton = glamorous(Button)({
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px"
});

const QuantityField = ({ css, id, quantity, onQuantityChange }) => (
  <Wrapper css={css}>
    <LeftButton
      onClick={event => {
        onQuantityChange(id, quantity - 1);
      }}
    >
      -
    </LeftButton>
    <div style={{ textAlign: "center" }}>{quantity}</div>
    <RightButton
      onClick={event => {
        onQuantityChange(id, quantity + 1);
      }}
    >
      +
    </RightButton>
  </Wrapper>
);

export default QuantityField;
