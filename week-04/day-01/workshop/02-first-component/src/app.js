import React from 'react'

import HotelList from './HotelList'
import SideMenu from './SideMenu'

import data from './data'

const divStyle = {
  display: 'flex',
  'justify-content': 'space-between'
}

function App() {
  return (
    <>
      <h1>Hotel Booking</h1>
      <div style={divStyle}>
        <SideMenu filters={data.filters} />
        <HotelList hotels={data.hotels} />
      </div>
    </>
  )
}

export default App
