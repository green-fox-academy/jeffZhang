import React from 'react'
import { connect } from 'react-redux'
import { changeNumber } from '../actions/counterActions'

function Increaser(props) {
  return (
    <div className="increaser">
      <h1>The Increaser</h1>
      <p>{props.counter}</p>
      <button onClick={props.increaseCounter}>Increase</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => {
      dispatch(changeNumber(1))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Increaser)
