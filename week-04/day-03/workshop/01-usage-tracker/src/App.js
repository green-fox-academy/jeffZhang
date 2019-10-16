import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'

import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Table from './components/Table'

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
    this.handleData = this.handleData.bind(this)
  }

  handleData = (name, time) => {
    this.setState(prevState => ({
      records: [...prevState.records, { name, time }]
    }))
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
        <Table data={this.state.records} />
        <Switch>
          <Route path="/1">
            <Component1 handleFunction={this.handleData} />
          </Route>
          <Route path="/2">
            <Component2 handleFunction={this.handleData} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
