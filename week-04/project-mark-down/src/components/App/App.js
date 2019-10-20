import React from 'react'
import marked from 'marked'
import './App.css'

import Menu from '../Menu/Menu'
import Editor from '../Editor/Editor'
import Preview from '../Preview/Preview'

function App() {
  return (
    <div className="App">
      <Menu />
      <Editor />
      <Preview />
    </div>
  )
}

export default App
