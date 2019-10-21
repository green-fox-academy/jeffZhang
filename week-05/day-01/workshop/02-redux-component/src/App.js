import React from 'react'
import './App.css'

import Increaser from './containers/Increaser'
import Decreaser from './containers/Decreaser'
import Setter from './containers/Setter'
import Resetter from './containers/Resetter'
import Tags from './containers/Tags'
import AddTag from './containers/AddTag'
import RemoveTag from './containers/RemoveTag'
import ComplexCounter from './containers/ComplexCounter'
import RemoveAllTags from './containers/RemoveAllTags'

function App() {
  return (
    <div className="App">
      <div className="block">
        <Increaser />
        <Decreaser />
        <Setter />
        <Resetter />
      </div>
      <div className="block">
        <Tags />
        <AddTag />
        <RemoveTag />
        <ComplexCounter />
        <RemoveAllTags />
      </div>
    </div>
  )
}

export default App
