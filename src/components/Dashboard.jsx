// @flow

import React, { Component } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import SignupPage from './SignupPage'

class Dashboard extends Component {
  state = {}

  render () {
    return (
      <div className="dashboard container">
        <Header />
        <Sidebar />
        <SignupPage />
      </div>
    )
  }
}

export default Dashboard
