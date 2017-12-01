import React from 'react'

const Sidebar = props => (
  <div className="sidebar bg-white">
    <div className="sidebar-divider">
      <h6>HOME</h6>
      <a className="sidebar-button">
        <i className="fa fa-newspaper-o" aria-hidden="true" />Dashboard
      </a>
    </div>
    <div>
      <h6>USERS</h6>
      <a className="sidebar-button">
        <i className="fa fa-users" aria-hidden="true" />Customers
      </a>
      <a className="sidebar-button">
        <i className="fa fa-users" aria-hidden="true" />Signups
      </a>
      <a className="sidebar-button">
        <i className="fa fa-area-chart" aria-hidden="true" />Providers
      </a>
      <a className="sidebar-button">
        <i className="fa fa-th-large" aria-hidden="true" />Admins
      </a>
    </div>
    <div>
      <h6>TESTS</h6>
      <a className="sidebar-button">
        <i className="fa fa-calendar" aria-hidden="true" />Bookings
      </a>
      <a className="sidebar-button">
        <i className="fa fa-users" aria-hidden="true" />Test Results
      </a>
      <a className="sidebar-button">
        <i className="fa fa-users" aria-hidden="true" />Packages
      </a>
    </div>
    <div>
      <h6>Partners</h6>
      <a className="sidebar-button">
        <i className="fa fa-building-o" aria-hidden="true" />Labs/Clinics
      </a>
    </div>
    <div>
      <h6>Others</h6>
      <a className="sidebar-button">
        <i className="fa fa-envelope" aria-hidden="true" />Newsletter
      </a>
    </div>
  </div>
)

export default Sidebar
