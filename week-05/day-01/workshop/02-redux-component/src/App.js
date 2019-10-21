import React from 'react'
import './App.css'

import Increaser from './containers/Increaser'
import Decreaser from './containers/Decreaser'
import Setter from './containers/Setter'
import Resetter from './containers/Resetter'

function App() {
  return (
    <div className="App">
      <Increaser />
      <Decreaser />
      <Setter />
      <Resetter />
    </div>
  )
}

export default App
