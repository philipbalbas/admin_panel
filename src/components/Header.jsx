import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../biomark-logo.png'
import photo from '../question-mark-face.jpg'

const Header = () => {
  return (
    <div className="header navbar navbar-default bg-white">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="BioMark Logo" height="45px" />
      </Link>
      <span className="row">
        <img className="profile-photo col" src={photo} height="45px" />
        <span className="col">
          <h3>User</h3>
        </span>
        <span className="col">
          <i className="fa fa-caret-down" aria-hidden="true" />
        </span>
      </span>
    </div>
  )
}

export default Header
