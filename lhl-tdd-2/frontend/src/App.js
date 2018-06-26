import React, { Component } from "react";
import BeerTable from "./BeerTable";
import { fetchBeers } from "./Api";

import NewBeerForm from "./NewBeerForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: [], showForm: false };
  }
  componentDidMount() {
    fetchBeers().then(({ beers }) => {
      this.setState({ beers });
    });
  }

  handleShowForm = event => {
    event.preventDefault();
    this.setState({ showForm: true });
  };

  handleNewBeer = data => {};

  render() {
    return (
      <div>
        <h1>Beer App</h1>
        <a href="#" onClick={this.handleShowForm}>
          New Beer
        </a>
        {this.state.showForm && <NewBeerForm onSubmit={this.handleNewBeer} />}
        <BeerTable beers={this.state.beers} />
      </div>
    );
  }
}
export default App;
