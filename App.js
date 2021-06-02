//Since the demo app I've created uses React Router to have a few routes - a dashboard, a listing of all posts, and an individual posts page, I'll bring React Router in now. I'll just bring in the dashboard and all posts listing for this demo.
import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
