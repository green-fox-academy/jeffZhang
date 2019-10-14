import React from 'react'

import Hotel from '../Hotel'

const ulStyle={
  'list-style':'none',
}

function HotelList(props) {
  return (
    <div>
      <h2>Hotel List</h2>
      <ul style={ulStyle}>
        {props.hotels.map((hotel, index) => (
          <Hotel hotel={hotel} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default HotelList
