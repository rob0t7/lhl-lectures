import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import Item from "./Item";

const Wrapper = glamorous.div({
  gridArea: "Items",
  border: "2px solid black",
  padding: ".5rem 1rem"
});

const Items = ({ items, onQuantityChange }) => (
  <Wrapper>
    <Item />
    <Item />
  </Wrapper>
);

export default Items;
