import React, { Component } from "react";

import BeerList from "./components/BeerList";
import { fetchProducts } from "./api/ProductAPI";
import ProductEdit from "./containers/ProductEdit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: true,
      showEdit: false,
      currentBeer: undefined,
      beers: []
    };
  }

  componentDidMount() {
    fetchProducts().then(beers => {
      this.setState({ beers });
    });
  }

  handleEditClick = id => () => {
    const currentBeer = this.state.beers.find(beer => beer.id === id);
    this.setState({ showList: false, showEdit: true, currentBeer });
  };

  handleEditSuccess = () => {
    fetchProducts().then(beers => {
      this.setState({ beers, showList: true, showEdit: false });
    });
  };

  render() {
    const { beers, showList, showEdit, currentBeer } = this.state;

    return (
      <div>
        <h1>Beer App</h1>
        {showList && (
          <BeerList beers={beers} onEditClick={this.handleEditClick} />
        )}
        {showEdit && (
          <ProductEdit beer={currentBeer} onSuccess={this.handleEditSuccess} />
        )}
      </div>
    );
  }
}

export default App;
