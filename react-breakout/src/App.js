import React, { Component } from "react";
import ShoppingCart from "./components/ShoppingCart";
import initialData from "./testData.json";
import { css } from "glamor";

import { changeQuantity } from "./api";

css.global("*, *:before, *:after", { boxSizing: "border-box" });
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { shoppingCart: initialData };
  }

  handleQuantityChange = (itemId, quantity) => {
    const shoppingCart = changeQuantity(
      this.state.shoppingCart,
      itemId,
      quantity
    );
    this.setState({ shoppingCart });
  };

  render() {
    return (
      <div>
        <ShoppingCart
          {...this.state.shoppingCart}
          onQuantityChange={this.handleQuantityChange}
        />
      </div>
    );
  }
}

export default App;
