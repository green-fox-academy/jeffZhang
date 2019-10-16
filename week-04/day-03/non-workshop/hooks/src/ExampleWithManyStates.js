import React, { useState } from 'react'

function ExampleWithManyStates() {
  const [age, setAge] = useState(42)
  const [fruit, setFruit] = useState('banana')
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])

  return (
    <div>
      <p>{age}</p>
      <p>{fruit}</p>
      <p>{todos[0].text}</p>
    </div>
  )
}

export default ExampleWithManyStates
