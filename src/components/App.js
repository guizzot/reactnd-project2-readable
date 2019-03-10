import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import Categories from './Categories'
import Page404 from './Page404'
import Post from './Post'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" exact component={Dashboard} />
          <Route path="/:category" exact component={Categories} />
          <Route path="/:category/:id" exact component={Post} />
          <Route path='/Page404' exact component={Page404} />
        </React.Fragment>
      </Router>
    )
  }
}

export default connect()(App)