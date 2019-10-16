import React from 'react'
import { createTableRow } from '../helpers'

function Table(props) {
  const { data } = props
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">The table header</th>
        </tr>
      </thead>
      <tbody>{data.map((datum,index) => createTableRow(datum,index))}</tbody>
    </table>
  )
}

export default Table
