import React from 'react'

const BeerTableRow = ({name, style, abv, description}) => (
  <tr>
    <td>{name}</td>
    <td>{style}</td>
    <td>{abv}</td>
    <td>{description}</td>
  </tr>
)

export default BeerTableRow
