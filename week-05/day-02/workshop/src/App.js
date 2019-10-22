import React from 'react'
import './App.css'
import RegistrationForm from './01-registration-form/RegistrationForm'
import UserRegistrationForm from './02-user-registration/UserRegistrationForm'
import PizzaPicker from './03-pizza-picker/PizzaPicker'
import TravelFrom from './04-travel-form/TravelFrom'

function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <UserRegistrationForm />
      <PizzaPicker />
      <TravelFrom />
    </div>
  )
}

export default App
