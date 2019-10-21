import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { deletePost } from './actions/postAction'

function TestComponent(props) {
  console.log('testcomponent props', props)

  useEffect(() => {
    console.log('use effect props', props)
  })

  const handleClick = () => {
    props.deletePost('1')
  }
  return (
    <div>
      test component
      <button onClick={handleClick}>delete post</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  // console.log('ownProps', ownProps)
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent)
