import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const topics = [
  {
    name: '1',
    id: '11',
    description: '111',
    resources: [
      {
        name: 'res - 1',
        id: 'res - 11',
        description: 'res - 111'
      },
      { name: 'res - 2', id: 'res - 2', description: 'res - 222' }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/topics">Topics</Link>
          <hr />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/topics" component={Topics} />
          </Switch>
        </div>
      </Router>
    )
  }
}

class Home extends Component {
  render() {
    return <h1>Home</h1>
  }
}

class Topics extends Component {
  render() {
    console.log(this.props);
    let { match } = this.props
    return (
      <div>
        <h1>Topics</h1>
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
        <Route path={`${match.path}/:topicId`} component={Topic} />
      </div>
    )
  }
}

function Topic({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)
  return (
    <div>
      <h2>TOPIC</h2>
      {'Topic id' + topic.id}
    </div>
  )
}

export default App
