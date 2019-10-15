import React, { PureComponent } from 'react'

import styles from './TodoItem.module.css'

class TodoItem extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className={styles['todo-item']}>
        <span>Title</span>
        <div className={styles['icons']}>
          <div className={styles['icon']}>bin</div>
          <div className={styles['icon']}>check</div>
        </div>
      </div>
    )
  }
}

export default TodoItem
