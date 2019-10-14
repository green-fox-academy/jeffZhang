import React from 'react'

const liStyle={
  width:'100%',
  height:'300px',
  border:'thin solid black',
  'margin-bottom':'20px',
  padding:'10px',
  'box-sizing':'border-box'
}

const imgStyle = {
  width: '200px',
  height: '200px',
  float: 'left',
  clear: 'both'
}

const pStyle = {
  display: 'inline-block',
  height: '200px'
}

function Hotel(props) {
  return (
    <li style={liStyle}>
      <h3>{props.hotel.name}</h3>
      <img src={props.hotel.imageURL} alt="No image" style={imgStyle} />
      <p style={pStyle}>{props.hotel.description}</p>
      <button>Book now!</button>
    </li>
  )
}

export default Hotel
