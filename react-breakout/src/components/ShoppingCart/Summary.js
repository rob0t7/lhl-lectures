import React from "react";
import numeral from "numeral";
import glamorous from "glamorous";

const MoneyField = glamorous.td({
  textAlign: "right"
});

const MONEY_FORMAT = "$0,0.00";
const Summary = () => (
  <table style={{ gridArea: "Summary" }}>
    <tbody>
      <tr>
        <td>Subtotal</td>
        <MoneyField>{numeral(2000 / 100).format(MONEY_FORMAT)}</MoneyField>
      </tr>
      <tr>
        <td>Shipping</td>
        <MoneyField>{numeral(1000 / 100).format(MONEY_FORMAT)}</MoneyField>
      </tr>
      <tr>
        <td>Taxes</td>
        <MoneyField>{numeral(100 / 100).format(MONEY_FORMAT)}</MoneyField>
      </tr>
      <tr style={{ fontWeight: "bold" }}>
        <td>Total</td>
        <MoneyField>
          {numeral((2000 + 1000 + 100) / 100).format(MONEY_FORMAT)}
        </MoneyField>
      </tr>
    </tbody>
  </table>
);

export default Summary;
