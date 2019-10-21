import React from 'react'
import { connect } from 'react-redux'

import styles from './Tags.module.css'

function Tags(props) {
  return (
    <div className="tags">
      <h1>Tags</h1>
      <ul className={styles['list']}>
        {props.tags.map(tag => (
          <li key={tag} className={styles['element']}>
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

export default connect(mapStateToProps)(Tags)
