import React from 'react'

export const createTableRow = (datum, index) => {
  return (
    <tr key={index}>
      <td>
        <strong>{datum.name}</strong>
      </td>
      <td>
        <strong>{datum.time} s</strong>
      </td>
    </tr>
  )
}
