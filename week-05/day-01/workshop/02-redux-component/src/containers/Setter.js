import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setCounter } from '../actions/counterActions'

function Setter(props) {
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    props.setCounter(value)
    setValue('')
  }

  return (
    <div className="Setter">
      <h1>The Setter</h1>
      <input type="text" onChange={handleChange} value={value}/>
      <button onClick={handleClick}>Set</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setCounter: number => {
      dispatch(setCounter(number))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Setter)
