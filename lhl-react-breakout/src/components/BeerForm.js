import React from "react";

const TextField = ({ id, label, name, value, setValue }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      name={name || id}
      value={value}
      onChange={event => {
        setValue(name, event.target.value);
      }}
    />
  </div>
);

const BeerFormComponent = ({ name, style, setValue, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <TextField
      id="name"
      label="Name"
      name="name"
      value=""
      setValue={setValue}
      value={name}
    />
    <TextField
      id="style"
      label="Style"
      name="style"
      value=""
      setValue={setValue}
      value={style}
    />
    <button>Go</button>
  </form>
);

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      style: ""
    };
  }
  setValue = (name, value) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    const { name, style } = this.state;
    return (
      <BeerFormComponent
        name={name}
        style={style}
        setValue={this.setValue}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
export default BeerForm;
