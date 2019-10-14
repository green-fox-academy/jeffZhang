import React from 'react'

import Star from '../Star'

const ulStyle = {
  'list-style': 'none'
}

const formStyle = {
  border: 'thin solid black'
}

function StarRating(props) {
  return (
    <div>
      <h4>Star rating</h4>
      <form style={formStyle}>
        <ul style={ulStyle}>
          {props.stars.map((star, index) => (
            <Star star={star} key={index} />
          ))}
        </ul>
      </form>
    </div>
  )
}

export default StarRating
