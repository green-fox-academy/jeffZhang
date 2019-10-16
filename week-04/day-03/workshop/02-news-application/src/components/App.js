import React, { Component } from 'react'
import './App.css'

import { NEWS_API_KEY, getNewsURL, getDelayedURL } from '../lib/helpers'
import Spinner from './Spinner'

class App extends Component {
  state = {
    articles: [],
    loaded: false
  }

  async componentDidMount() {
    const newsURL = getNewsURL(NEWS_API_KEY)
    const delayedURL = getDelayedURL(3000, newsURL)

    //-------------------------setTimeout solution-----------------------------//
    // setTimeout(async () => {
    //   let response = await fetch(newsURL).then(response => response.json())
    //   await this.setState({
    //     articles: [...response.articles]
    //   })
    //   await this.setState({ loaded: true })
    // }, 5000)

    //----------------------------use url to delay--------------------------//
    let response = await fetch(delayedURL).then(response => response.json())
    await this.setState({
      articles: [...response.articles],
      loaded: true
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loaded ? (
          this.state.articles.map(article => (
            <p key={article.title}>{article.title}</p>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    )
  }
}

export default App
