import React, { Component } from 'react'
import './App.css'

import { NEWS_API_KEY, getNewsURL } from '../lib/helpers'

class App extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    const newsURL = getNewsURL(NEWS_API_KEY)
    /*for now not using the slowyy*/
    // const delayedURL = getDelayedURL(3000,newsURL)
    setTimeout(async () => {
      let response = await fetch(newsURL).then(response => response.json())
      await this.setState({
        articles: [...response.articles]
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.articles.map(article => (
          <p key={article.title}>{article.title}</p>
        ))}
      </div>
    )
  }
}

export default App
