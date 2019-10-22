import React, { PureComponent } from 'react'

const initState = {
  firstName: '',
  lastName: '',
  age: 0,
  gender: '',
  destination: '',
  dietaryRestrictions: []
}

class TravelFrom extends PureComponent {
  state = initState

  handleChange = event => {
    const target = event.target

    if (target.type === 'checkbox') {
      let currentDietary = this.state.dietaryRestrictions
      let dietary = target.id
      if (currentDietary.includes(dietary)) {
        this.setState({
          dietaryRestrictions: currentDietary.filter(
            aDietary => aDietary !== dietary
          )
        })
      } else {
        this.setState({
          dietaryRestrictions: [...currentDietary, dietary]
        })
      }
    } else {
      const value = target.value
      const name = target.name

      this.setState({
        [name]: value
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    let {
      firstName,
      lastName,
      age,
      gender,
      destination,
      dietaryRestrictions
    } = this.state
    alert(`First name:${firstName}
    Last name:${lastName}
    Age:${age}
    Gender:${gender}
    Destination:${destination}
    Dietary restrictions:${dietaryRestrictions.map(element => element)}
    `)
    this.setState(initState)
  }

  render() {
    return (
      <div>
        <h1>Travel form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Name</legend>
            <label htmlFor="firstName">
              First name
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="lastName">
              Last name
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Age</legend>
            <label htmlFor="age">
              Age
              <input
                type="number"
                name="age"
                id="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Gender</legend>
            <label htmlFor="male">
              Male
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="female">
              Female
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Destination</legend>
            <label htmlFor="destination">
              Base
              <select
                name="destination"
                id="destination"
                value={this.state.destination}
                onChange={this.handleChange}
              >
                <option value="">Select</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>
                <option value="NYC">NYC</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Dietary Restrictions</legend>
            <label htmlFor="cold">
              Cold
              <input
                type="checkbox"
                name="dietaryRestrictions"
                id="cold"
                checked={this.state.dietaryRestrictions.includes('cold')}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="warm">
              Warm
              <input
                type="checkbox"
                name="dietaryRestrictions"
                id="warm"
                checked={this.state.dietaryRestrictions.includes('warm')}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="gluten">
              Gluten
              <input
                type="checkbox"
                name="dietaryRestrictions"
                id="gluten"
                checked={this.state.dietaryRestrictions.includes('gluten')}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default TravelFrom
