import React, { Component } from 'react'
import './App.css'

import { NEWS_API_KEY, getNewsURL } from '../lib/helpers'
import Spinner from './Spinner'
import SearchField from './SearchField'

class App extends Component {
  state = {
    articles: [],
    /*3 sorts of loadStatus... */
    loadStatus: 'default',
    countryCode: ''
  }

  handleUpdateCountryCode = countryCode => {
    this.setState({
      countryCode,
      /*to make sure that we update countryCode, and set loaded back to default*/
      loadStatus: 'default'
    })
  }

  handleFetchNews = countryCode => {
    const newsURL = getNewsURL(countryCode, NEWS_API_KEY)
    this.setState({ loadStatus: 'loading' })
    fetch(newsURL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: [...data.articles],
          loadStatus: 'loaded'
        })
      })
  }

  render() {
    return (
      <div className="App">
        <SearchField
          countryCode={this.state.countryCode}
          updateCountryCode={this.handleUpdateCountryCode}
          fetchNews={this.handleFetchNews}
        />
        {this.state.loadStatus === 'loaded' ? (
          this.state.articles.map(article => (
            <p key={article.title}>{article.title}</p>
          ))
        ) : this.state.loadStatus === 'loading' ? (
          <Spinner />
        ) : <p>
          Try type and search!
        </p>}
      </div>
    )
  }
}

export default App
