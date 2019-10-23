import React, { useState } from 'react'
import { connect } from 'react-redux'
import { asyncIncrease } from '../actions/counterActions'

function Counter(props) {
  const [increaser, setIncreaser] = useState(0)
  const [timeDelayed, setTimeDelayed] = useState(0)

  const { counter, asyncIncrease } = props

  const handleChange = event => {
    const target = event.target
    if (target.name === 'increaser') {
      setIncreaser(parseInt(target.value))
    }
    if (target.name === 'timeDelayed') {
      setTimeDelayed(parseInt(target.value))
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    asyncIncrease(increaser, timeDelayed)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <form action="" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Counter</legend>
          <label htmlFor="increaser">
            Increasing number
            <input
              type="number"
              placeholder="Input the increasing number"
              id="increaser"
              name="increaser"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="detimeDelayedlay">
            Time delayed
            <input
              type="number"
              placeholder="Input the delay time (in millisec)"
              id="timeDelayed"
              name="timeDelayed"
              onChange={handleChange}
            />
          </label>
          <button>Increase</button>
        </fieldset>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    asyncIncrease: (number, timeDelayed) =>
      dispatch(asyncIncrease(number, timeDelayed))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
