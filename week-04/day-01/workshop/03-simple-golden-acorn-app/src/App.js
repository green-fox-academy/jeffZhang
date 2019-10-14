import React, { Component } from 'react'

import Button from './Button'
import Display from './Display'

class App extends Component {
  state = {
    number: 0
  }

  componentDidMount() {
    document.addEventListener('keydown', event => {
      if (event.keyCode === 38) {
        this.handleIncrease()
      }
      if (event.keyCode === 40) {
        this.handleDecrease()
      }
    })
  }

  handleIncrease = () => {
    this.setState(prevState => ({
      number: ++prevState.number
    }))
  }

  handleDecrease = () => {
    if (this.state.number > 0) {
      this.setState(prevState => ({
        number: --prevState.number
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <Button name="Buy one" handleClick={this.handleIncrease} />
        <Display>{this.state.number}</Display>
        <Button name="Eat one" handleClick={this.handleDecrease}></Button>
      </div>
    )
  }
}

export default App
