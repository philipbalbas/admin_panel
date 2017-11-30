// @flow

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Sidebar from './Sidebar'
import SignupPage from './SignupPage'
import ProfilePage from './ProfilePage'

class Dashboard extends Component {
  state = {}

  render () {
    return (
      <div className="dashboard bg-light">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={SignupPage} />
          <Route path="/profile/:id" component={ProfilePage} />
        </Switch>
      </div>
    )
  }
}

export default Dashboard
