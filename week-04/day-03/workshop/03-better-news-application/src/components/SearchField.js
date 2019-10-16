import React, { PureComponent } from 'react'

class SearchField extends PureComponent {
  handleChange = event => {
    this.props.updateCountryCode(event.target.value)
  }

  handleClick = event => {
    event.preventDefault()
    if (this.props.countryCode.trim() === '') {
      alert('Input first.')
      return
    }
    this.props.fetchNews(this.props.countryCode)
  }

  render() {
    return (
      <div className="search-field">
        <form action="">
          <input
            type="text"
            placeholder="Country codes"
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Search news</button>
        </form>
      </div>
    )
  }
}

export default SearchField
