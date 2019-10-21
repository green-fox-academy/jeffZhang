import React from 'react'
import { connect } from 'react-redux'
import styles from './RemoveTag.module.css'

function RemoveTag(props) {
  return (
    <div className="tags">
      <h1>Tags</h1>
      <ul className={styles['list']}>
        {props.tags.map(tag => (
          <li
            key={tag}
            className={styles['element']}
            onClick={() => props.removeTag(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tags: state.tags
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTag: tag => {
      dispatch({ type: 'REMOVE_TAG', tag: tag })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveTag)
