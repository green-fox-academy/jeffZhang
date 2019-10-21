import React, { useState } from 'react'
import { connect } from 'react-redux'

function AddTag(props) {
  const [value, setValue] = useState('')

  const handleChange = event => {
    event.preventDefault()
    setValue(event.target.value)
  }

  const handleClick = value => {
    props.addTag(value)
    setValue('')
  }

  return (
    <div>
      <h1>Add Tag</h1>
      <input type="text" onChange={handleChange} value={value} />
      <button onClick={() => handleClick(value)}>Add</button>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    addTag: tag => {
      dispatch({ type: 'ADD_TAG', tag: tag })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTag)
