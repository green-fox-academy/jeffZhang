import React from 'react'
import styles from './Editor.module.css'

function Editor() {
  return (
    <div className={styles['Editor']}>
      <div className={styles['header']}></div>
      <div className={styles['body']}>
        <input
          type="text"
          placeholder="Start with a new note!"
          className={styles['textarea']}
        />
      </div>
    </div>
  )
}

export default Editor
