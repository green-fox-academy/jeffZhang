import React, { Component } from 'react'

const initState = {
  userName: '',
  emailAddress: '',
  password: ''
}

class UserRegistrationForm extends Component {
  state = initState

  validate = () => {
    const { userName, emailAddress, password } = this.state
    if (!userName || !emailAddress.includes('@') || password.length < 8) {
      return false
    }
    return true
  }

  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.setState(initState)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="user name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="Email address"
            name="emailAddress"
            value={this.state.emailAddress}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button disabled={!this.validate()}>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserRegistrationForm
