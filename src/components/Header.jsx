import React from 'react'

import logo from '../biomark-logo.png'

const Header = () => {
  return (
    <div className="header navbar navbar-default navbar-fixed-top">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="BioMark Logo" height="45px" />
      </a>
    </div>
  )
}

export default Header
