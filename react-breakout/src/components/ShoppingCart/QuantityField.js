import React from "react";
import glamorous from "glamorous";
import Button from "../Button";

const Wrapper = glamorous.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center"
});

const LeftButton = glamorous(Button)({
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px"
});

const RightButton = glamorous(Button)({
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px"
});

class QuantityField extends React.Component {
  render() {
    const { css } = this.props;
    return (
      <Wrapper css={css}>
        <LeftButton>-</LeftButton>
        <div style={{ textAlign: "center" }}>1</div>
        <RightButton onClick={this.handleIncrease}>+</RightButton>
      </Wrapper>
    );
  }
}

export default QuantityField;
