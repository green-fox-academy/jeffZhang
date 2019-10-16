import React, { Component } from 'react'

class Component1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      'Component1',
      (unmountTime - this.state.startTime)/1000
    )
  }

  render() {
    return <p>This is the content of component 1.</p>
  }
}

export default Component1
