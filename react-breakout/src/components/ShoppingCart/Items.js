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
    {items.map(item => (
      <Item key={item.id} {...item} onQuantityChange={onQuantityChange} />
    ))}
  </Wrapper>
);

export default Items;
