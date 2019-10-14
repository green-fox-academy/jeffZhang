import React from 'react'

import StarRating from '../StarRating'
import PropertyType from '../PropertyType'

const divStyle = {
  display: 'flex',
  'flex-direction':'column',
  'justify-content': 'flexs-start'
}

function SideMenu(props) {
  return (
    <div style={divStyle}>
      <StarRating stars={props.filters['Star rating']} />
      <PropertyType types={props.filters['Property type']} />
    </div>
  )
}

export default SideMenu
