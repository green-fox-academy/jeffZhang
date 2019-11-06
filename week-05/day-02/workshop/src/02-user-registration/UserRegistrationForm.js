import React, { Component } from 'react'

const initState = {
  userName: '',
  emailAddress: '',
  password: ''
}

const validate = (name, email, password) => ({
  name: !name,
  email: !email.includes('@'),
  password: password.length < 8
})

class UserRegistrationForm extends Component {
  state = initState

  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState(initState)
  }

  render() {
    /*validate before render*/
    const { userName, emailAddress, password } = this.state
    const errors = validate(userName, emailAddress, password)
    const isDisabled = Object.keys(errors).some(key => errors[key])
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
          <button disabled={isDisabled}>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserRegistrationForm
