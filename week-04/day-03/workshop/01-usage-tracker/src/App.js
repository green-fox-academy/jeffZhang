import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import Component1 from './components/component1'
import Component2 from './components/component2'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      records: [
        //patter
        /*
          {
            name:string,
            time: number
          }
        */
      ]
    }
  }

  handleAddTableRow = (name, time) => {
    this.setState(prevState => ({
      records: [...prevState.records, { name, time }]
    }))
  }

  createTable = data => {
    return (
      <table>
        <thead>
          <tr>
            <th colSpan="2">The table header</th>
          </tr>
        </thead>
        <tbody>
          {data.map(datum => (
            <tr>
              <td>
                <strong>{datum.name}</strong>
              </td>
              <td>
                <strong>{datum.time} s</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <Router>
        <Link to="/1" className="link">
          1
        </Link>

        <Link to="/2" className="link">
          2
        </Link>
        {this.createTable(this.state.records)}
        <Switch>
          <Route path="/1">
            <Component1 handleFunction={this.handleAddTableRow.bind(this)} />
          </Route>
          <Route path="/2">
            <Component2 handleFunction={this.handleAddTableRow.bind(this)} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
