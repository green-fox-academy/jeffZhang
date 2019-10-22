import React, { Component } from 'react'

const initState = {
  currentFirstName: '',
  currentLastName: '',
  currentEmail: '',
  registration: []
}

class RegistrationForm extends Component {
  state = initState

  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let { currentFirstName, currentLastName, currentEmail } = this.state
    let newRegistration = [...this.state.registration]
    if (
      currentFirstName.trim() !== '' &&
      currentLastName.trim() !== '' &&
      currentEmail.trim() !== ''
    ) {
      newRegistration.push({
        firstName: currentFirstName,
        lastName: currentLastName,
        email: currentEmail
      })
      this.setState({
        currentFirstName: '',
        currentLastName: '',
        currentEmail: '',
        registration: newRegistration
      })
    } else {
      alert('fill the empty fields')
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            name="currentFirstName"
            value={this.state.currentFirstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="currentLastName"
            value={this.state.currentLastName}
            onChange={this.handleChange}
          />
          <input
            type="email"
            placeholder="Email address"
            name="currentEmail"
            value={this.state.currentEmail}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <ul>
          {this.state.registration.map((user, index) => (
            <li key={index}>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RegistrationForm
