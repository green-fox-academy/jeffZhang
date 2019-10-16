import React, { useState } from 'react'

function AddNames() {
  const [people, setPeople] = useState([
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  ])
  console.log(people);

  const [person, setPerson] = useState({
    firstName: '',
    lastName: ''
  })

  const onChange = event => {
    setPerson({ ...person, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (person.lastName.trim() === '' && person.lastName.trim() === '') return

    const newPerson = {
      lastName: person.lastName,
      firstName: person.firstName
    }

    setPerson({ lastName: '', firstName: '' })
    setPeople([...people, newPerson])
  }

  return (
    //just to learn hooks, as simple as possible
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name.."
            value={person.firstName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name.."
            value={person.lastName}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>

      <div className="col">
        <h2>People: </h2>
        <hr />
        {people.map(p => (
          <div key={Math.random() * 1000000000}>
            <p>
              {p.firstName} {p.lastName}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddNames
