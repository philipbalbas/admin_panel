import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../biomark-logo.png'

const Header = () => {
  return (
    <div className="header navbar navbar-default bg-white">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="BioMark Logo" height="45px" />
      </Link>
    </div>
  )
}

export default Header
