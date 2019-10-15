import React, { PureComponent } from 'react'
import styles from './Theme.module.css'

import TodoItem from '../TodoItem'

class Theme extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={styles['theme']}>
        <div className={styles['white-board']}>
          <h1 className={styles['heading']}>TODOS</h1>
          <form className={styles['search-form']}>
            <input type="text" className={styles['input']} />
            <button className={styles['button']}>
              <span className={styles['button-text']}>Add</span>
            </button>
          </form>
          <div className={styles['todos-list']}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
        </div>
      </div>
    )
  }
}

export default Theme
