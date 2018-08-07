import React, { Component } from "react";

import Header from "./components/Header";
import BeerTable from "./components/BeerTable";
import { fetchProducts, addProduct } from "./api/products";
import BeerForm from "./components/BeerForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: [], activePage: "Form" };
  }

  fetchProducts = async () => {
    const beers = await fetchProducts();
    this.setState({ beers });
  };

  componentDidMount() {
    this.fetchProducts();
  }

  handleNewProduct = async product => {
    const beers = await addProduct(product);
    this.setState({ beers, activePage: "BeerTable" });
  };
  render() {
    const { beers, activePage } = this.state;
    return (
      <div>
        <Header />
        {activePage === "BeerTable" && <BeerTable beers={beers} />}
        {activePage === "Form" && <BeerForm onSubmit={this.handleNewProduct} />}
      </div>
    );
  }
}
export default App;
