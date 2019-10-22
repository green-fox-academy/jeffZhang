import React, { Component } from 'react'

const initState = {
  base: '9',
  toppings: [],
  cut: 'not cut',
  comments: ''
}

class PizzaPicker extends Component {
  state = initState

  handleChange = event => {
    const target = event.target

    if (target.type === 'checkbox') {
      let currentToppings = this.state.toppings
      let topping = target.id
      if (currentToppings.includes(topping)) {
        this.setState({
          toppings: currentToppings.filter(aTopping => aTopping !== topping)
        })
      } else {
        this.setState({
          toppings: [...currentToppings, topping]
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

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Pizza picker</h1>
        <form action="">
          <fieldset>
            <legend>Base</legend>
            <label htmlFor="base">
              Base
              <select
                name="base"
                id="base"
                value={this.state.base}
                onChange={this.handleChange}
              >
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Toppings</legend>
            <label htmlFor="ham">
              Ham
              <input
                type="checkbox"
                name="toppings"
                id="ham"
                checked={this.state.toppings.includes('ham')}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="pineapple">
              Pineapple
              <input
                type="checkbox"
                name="toppings"
                id="pineapple"
                checked={this.state.toppings.includes('pineapple')}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="chicken">
              Chicken
              <input
                type="checkbox"
                name="toppings"
                id="chicken"
                checked={this.state.toppings.includes('chicken')}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Cut or not</legend>
            <label htmlFor="cut">
              Cut
              <input
                type="radio"
                name="cut"
                id="cut"
                value="cut"
                checked={this.state.cut === 'cut'}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="notCut">
              Not cut
              <input
                type="radio"
                name="cut"
                id="notCut"
                value="not cut"
                checked={this.state.cut === 'not cut'}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Comments</legend>
            <label htmlFor="comments">
              Comments
              <textarea
                name="comments"
                id="comments"
                value={this.state.comments}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default PizzaPicker
