import React, { Component } from "react";

class NewBeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", style: "", abv: "" };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { name, style, abv } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div>
          <label labelFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label labelFor="style">Style</label>
          <input
            type="text"
            name="style"
            id="style"
            value={style}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label labelFor="abv">ABV</label>
          <input
            type="text"
            name="abv"
            id="abv"
            value={abv}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Create Beer</button>
      </form>
    );
  }
}

export default NewBeerForm;
