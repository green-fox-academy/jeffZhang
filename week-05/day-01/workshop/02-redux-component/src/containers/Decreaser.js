import React from 'react'
import { connect } from 'react-redux'
import { decreaseCounter } from '../actions/counterActions'

function Decreaser(props) {
  return (
    <div className="Decreaser">
      <h1>The Decreaser</h1>
      <p>{props.counter}</p>
      <button onClick={props.decreaseCounter}>decrease</button>
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
    decreaseCounter: () => {
      dispatch(decreaseCounter(1))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decreaser)
