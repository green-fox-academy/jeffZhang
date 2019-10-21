import React from 'react'
import { connect } from 'react-redux'

function ComplexCounter(props) {
  let { tags, counter } = props
  return (
    <div>
      <h1>Complex Counter</h1>
      <p>{tags.length + counter}</p>
    </div>
  )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(ComplexCounter)
