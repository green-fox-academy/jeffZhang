import React, { Component } from 'react'

class Component1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Component1',
      startTime: new Date()
    }
  }
  componentDidMount() {
    let mountedTime = new Date()
    this.setState({
      startTime: mountedTime
    })
  }

  componentWillUnmount() {
    let unmountTime = new Date()
    this.props.handleFunction(
      this.state.name,
      Math.round((unmountTime - this.state.startTime) / 1000)
    )
  }

  render() {
    return <p>This is the content of component 1.</p>
  }
}

export default Component1
