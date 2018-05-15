import React from "react";
import numeral from "numeral";
import glamorous from "glamorous";

const MoneyField = glamorous.td({
  textAlign: "right"
});

const MONEY_FORMAT = "$0,0.00";
const Summary = ({ subtotalCents, shippingCents, taxCents, totalCents }) => (
  <table style={{ gridArea: "Summary" }}>
    <tbody>
      <tr>
        <td>Subtotal</td>
        <MoneyField>
          {numeral(subtotalCents / 100).format(MONEY_FORMAT)}
        </MoneyField>
      </tr>
      <tr>
        <td>Shipping</td>
        <MoneyField>
          {numeral(shippingCents / 100).format(MONEY_FORMAT)}
        </MoneyField>
      </tr>
      <tr>
        <td>Taxes</td>
        <MoneyField>{numeral(taxCents / 100).format(MONEY_FORMAT)}</MoneyField>
      </tr>
      <tr style={{ fontWeight: "bold" }}>
        <td>Total</td>
        <MoneyField>
          {numeral(totalCents / 100).format(MONEY_FORMAT)}
        </MoneyField>
      </tr>
    </tbody>
  </table>
);

export default Summary;
