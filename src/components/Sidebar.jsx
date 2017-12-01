import React from 'react'

const Sidebar = props => (
  <div className="sidebar bg-white">
    <div className="sidebar-divider">
      <h6>HOME</h6>
      <p className="sidebar-button">
        <i className="fa fa-newspaper-o" aria-hidden="true" />Dashboard
      </p>
    </div>
    <div>
      <h6>USERS</h6>
      <p className="sidebar-button">
        <i className="fa fa-users" aria-hidden="true" />Customers
      </p>
      <p className="sidebar-button">
        <i className="fa fa-users" aria-hidden="true" />Signups
      </p>
      <p className="sidebar-button">
        <i className="fa fa-area-chart" aria-hidden="true" />Providers
      </p>
      <p className="sidebar-button">
        <i className="fa fa-th-large" aria-hidden="true" />Admins
      </p>
    </div>
    <div>
      <h6>TESTS</h6>
      <p className="sidebar-button">
        <i className="fa fa-calendar" aria-hidden="true" />Bookings
      </p>
      <p className="sidebar-button">
        <i className="fa fa-users" aria-hidden="true" />Test Results
      </p>
      <p className="sidebar-button">
        <i className="fa fa-users" aria-hidden="true" />Packages
      </p>
    </div>
    <div>
      <h6>Partners</h6>
      <p className="sidebar-button">
        <i className="fa fa-building-o" aria-hidden="true" />Labs/Clinics
      </p>
    </div>
    <div>
      <h6>Others</h6>
      <p className="sidebar-button">
        <i className="fa fa-envelope" aria-hidden="true" />Newsletter
      </p>
    </div>
  </div>
)

export default Sidebar
