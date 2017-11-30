// @flow

import React, { Component } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import SignupPage from './SignupPage'

class Dashboard extends Component {
  state = {}

  render () {
    return (
      <div className="dashboard bg-light">
        <Header />
        <Sidebar />
        <SignupPage />
      </div>
    )
  }
}

export default Dashboard
