import React from 'react'
import { connect } from 'react-redux'
import { setNumber } from '../actions/counterActions'

function Resetter(props) {
  return (
    <div className="Resetter">
      <h1>The Resetter</h1>
      <button onClick={props.resetCounter}>Reset</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    resetCounter: () => {
      dispatch(setNumber(0))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Resetter)
