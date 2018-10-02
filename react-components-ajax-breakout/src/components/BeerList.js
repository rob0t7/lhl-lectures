import React from "react";

import BeerListRow from "./BeerListRow";

const BeerList = ({ beers, onEditClick }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Brewery</th>
          <th>Style</th>
          <th>ABV</th>
        </tr>
      </thead>
      <tbody>
        {beers.map(beer => (
          <BeerListRow
            key={beer.id}
            {...beer}
            onEditClick={onEditClick(beer.id)}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default BeerList;
