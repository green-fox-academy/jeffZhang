import React from 'react'

function Button(props) {
  return (
    <button onClick={props.handleClick} onKeyDown={props.handleUpArrow}>
      {props.name}
    </button>
  )
}

export default Button
