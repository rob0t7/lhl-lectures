import React from "react";
import BeerTableRow from "./BeerTableRow";

const BeerTable = ({ beers }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Style</th>
        <th>ABV</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {/* <BeerTableRow
          name={beer.name}
          style={beer.style}
          abv={beer.abv}
          description={beer.description}
          /> */}
      {beers.map(beer => (
        <BeerTableRow {...beer} />
      ))}

      <tr>
        <td colSpan="4">
          <a href="#">Add New</a>
        </td>
      </tr>
    </tbody>
  </table>
);

export default BeerTable;
