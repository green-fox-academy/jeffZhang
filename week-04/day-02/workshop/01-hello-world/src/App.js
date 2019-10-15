import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/error" component={ErrorPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  )
}

const HomePage = () => <p>Hello world!</p>

const NoMatchPage = () => <p>This page is not implemented yet</p>

const ErrorPage = ({ match }) => (
  <div>
    {match.isExact ? <p>Something bad happened.</p> : null}
    <Route path={`${match.path}/:errorcode`} component={ErrorCodepage} />
  </div>
)

const ErrorCodepage = ({ match }) => (
  <p>{`Error: <${match.params.errorcode}>`}</p>
)

export default App
