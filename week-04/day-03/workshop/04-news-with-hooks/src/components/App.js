import React, { useState } from 'react'
import './App.css'

import { NEWS_API_KEY, getNewsURL } from '../lib/helpers'
import Spinner from './Spinner'
import SearchField from './SearchField'

function App() {
  const [articles, setArticles] = useState([])
  /*3 sorts of loadStatus... */
  const [loadStatus, setLoadStatus] = useState('default')
  const [countryCode, setCountryCode] = useState('')

  const updateCountryCode = countryCode => {
    setCountryCode(countryCode)
  }

  const updateLoadStatus = () => {
    setLoadStatus('default')
  }

  const fetchNews = countryCode => {
    const newsURL = getNewsURL(countryCode, NEWS_API_KEY)
    setLoadStatus('loading')
    fetch(newsURL)
      .then(response => response.json())
      .then(data => {
        setArticles([...data.articles])
        setLoadStatus('loaded')
      })
  }

  return (
    <div className="App">
      <SearchField
        countryCode={countryCode}
        updateCountryCode={updateCountryCode}
        fetchNews={fetchNews}
        updateLoadStatus={updateLoadStatus}
      />
      {loadStatus === 'loaded' ? (
        articles.map(article => <p key={article.title}>{article.title}</p>)
      ) : loadStatus === 'loading' ? (
        <Spinner />
      ) : (
        <p>Try type and search!</p>
      )}
    </div>
  )
}

export default App
