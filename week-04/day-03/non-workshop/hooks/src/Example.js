import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)
  // console.log(useState(0)) // checkout the return value of useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  useEffect(() => {
    let timer = setInterval(() => {
      setCount(count + 1)
      console.log(timer)
      console.log('count', count)
      console.log('trigger useEffect, 5 secs')
      return clearInterval(timer)
    }, 3000)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
