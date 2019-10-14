import React from 'react'

import Type from '../Type'

const ulStyle = {
  'list-style':'none'
}

const formStyle = {
  border:'thin solid black'
}

function PropertyType(props) {
  return (
    <div>
      <h4>Property type</h4>
      <form style={formStyle}>
        <ul style={ulStyle}>
          {props.types.map((type, index) => (
            <Type type={type} key={index} />
          ))}
        </ul>
      </form>
    </div>
  )
}

export default PropertyType
