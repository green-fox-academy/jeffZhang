import React from 'react'

import './Item.css'

function Item(props) {
  let { text, buttonText, action } = props

  return (
    <li>
      <div>{text}</div>
      <button onClick={action}>{buttonText}</button>
    </li>
  )
}

export default Item
