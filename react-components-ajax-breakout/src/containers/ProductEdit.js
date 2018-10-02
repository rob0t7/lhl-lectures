import React from "react";

import ProductEditForm from "../components/ProductEditForm";

import { updateProduct } from "../api/ProductAPI";

class ProductEdit extends React.Component {
  handleSubmit = beer => {
    updateProduct(beer).then(beer => {
      this.props.onSuccess();
    });
  };

  render() {
    const { beer } = this.props;
    return <ProductEditForm beer={beer} onSubmit={this.handleSubmit} />;
  }
}

export default ProductEdit;
