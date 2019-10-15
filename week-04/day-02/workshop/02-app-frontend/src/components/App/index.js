import React, { Component } from 'react'

import Theme from '../Theme'

import styles from './App.module.css'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Theme />
      </div>
    )
  }
}

export default App
