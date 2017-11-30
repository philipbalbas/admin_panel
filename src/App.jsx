import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
// import 'font-awesome/css/font-awesome.min.css'

import Dashboard from './components/Dashboard'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    )
  }
}

export default App
