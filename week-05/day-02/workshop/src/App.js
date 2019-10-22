import React from 'react'
import './App.css'
import RegistrationForm from './01-registration-form/RegistrationForm'
import UserRegistrationForm from './02-user-registration/UserRegistrationForm'
import PizzaPicker from './03-pizza-picker/PizzaPicker'

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <UserRegistrationForm />
      <PizzaPicker />
    </div>
  )
}

export default App
