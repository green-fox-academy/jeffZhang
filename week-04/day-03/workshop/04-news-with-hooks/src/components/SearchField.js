import React from 'react'

function SearchField(props) {
  const handleChange = event => {
    props.updateCountryCode(event.target.value)
  }

  const handleClick = event => {
    event.preventDefault()
    //set load status back to default first
    props.updateLoadStatus()
    if (props.countryCode.trim() === '') {
      alert('Input first.')
      return
    }
    props.fetchNews(props.countryCode)
  }
  return (
    <div className="search-field">
      <form action="">
        <input
          type="text"
          placeholder="Country codes"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search news</button>
      </form>
    </div>
  )
}

export default SearchField
