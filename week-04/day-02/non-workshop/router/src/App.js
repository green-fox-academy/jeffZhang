import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'

function AppWithRouter() {
  // return ()
}

class App extends Component {
  state = { selected: 0 }

  handleClick(selected) {
    this.setState({ selected })
  }

  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

class Home extends Component {
  render() {
    return <p>Home</p>
  }
}

class About extends Component {
  render() {
    return <p>About</p>
  }
}

class Dashboard extends Component {
  render() {
    return <p>Dashboard</p>
  }
}

// class Home

export default App
