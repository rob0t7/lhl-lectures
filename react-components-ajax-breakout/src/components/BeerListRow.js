import React from "react";

/* const { name } = props
 * const name = props.name */

const BeerListRow = ({ name, brewery, style, abv, onEditClick }) => (
  <tr>
    <td>{name}</td>
    <td>{brewery}</td>
    <td>{style}</td>
    <td>{abv}</td>
    <td>
      <a
        href="#"
        onClick={event => {
          event.preventDefault();
          onEditClick();
        }}
      >
        Edit
      </a>
    </td>
  </tr>
);

export default BeerListRow;
