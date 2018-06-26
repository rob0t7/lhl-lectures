import React from "react";
import PropTypes from "prop-types";

const BeerTableRow = ({ name, style }) => (
  <tr>
    <td>{name}</td>
    <td>{style}</td>
  </tr>
);

const BeerTable = ({ beers }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Style</th>
        <th>ABV</th>
      </tr>
    </thead>
    <tbody>{beers.map(beer => <BeerTableRow key={beer.id} {...beer} />)}</tbody>
  </table>
);

BeerTable.propTypes = {
  beers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired
    })
  ).isRequired
};
export default BeerTable;
