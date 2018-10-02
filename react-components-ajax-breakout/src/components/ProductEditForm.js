import React from "react";

const TextField = ({ id, label, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type="text" id={id} name={id} value={value} onChange={onChange} />
  </div>
);

class ProductEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.beer };
  }

  handleChange = key => event => {
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    const { name, brewery, style, abv } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Edit</h2>
        <TextField
          label="Product Name"
          id="name"
          value={name}
          onChange={this.handleChange("name")}
        />
        <TextField
          label="Brewery"
          id="brewery"
          value={brewery}
          onChange={this.handleChange("brewery")}
        />
        <TextField
          label="Style"
          id="style"
          value={style}
          onChange={this.handleChange("style")}
        />
        <TextField
          label="ABV"
          id="abv"
          value={abv}
          onChange={this.handleChange("abv")}
        />
        <button type="submit">Update Product</button>
      </form>
    );
  }
}
export default ProductEditForm;
