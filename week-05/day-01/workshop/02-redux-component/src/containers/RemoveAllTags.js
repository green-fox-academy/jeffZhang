import React from 'react'
import { connect } from 'react-redux'

function RemoveAllTags(props) {
  return (
    <div>
      <h1>Remove All Tags</h1>
      <button onClick={props.removeAllTags}>Remove All Tags</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeAllTags: () => {
      dispatch({ type: 'REMOVE_TAGS' })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(RemoveAllTags)
