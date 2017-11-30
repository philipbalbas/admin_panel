import React from 'react'
import dateFns from 'date-fns'

const SignUpStats = ({ users }) => {
  const usersSignedUpToday = users.filter(user => {
    return dateFns.isToday(user.joinDate)
  })
  const usersSignedThisMonth = users.filter(user => {
    return dateFns.isThisMonth(user.joinDate)
  })
  return (
    <div className="stats row">
      <div className=" col-sm row">
        <span className="fa-stack fa-2x col-3">
          <i className="fa fa-circle fa-stack-2x icon-back-1" />
          <i className="fa fa-users fa-stack-1x fa-inverse" />
        </span>
        <div className="col-9">
          <h2>{usersSignedUpToday.length}</h2>
          <p>Today</p>
        </div>
      </div>
      <div className=" col-sm row">
        <span className="fa-stack fa-2x col-3">
          <i className="fa fa-circle fa-stack-2x icon-back-2" />
          <i className="fa fa-users fa-stack-1x fa-inverse" />
        </span>
        <div className="col-9">
          <h2>{usersSignedThisMonth.length}</h2>
          <p>This Month</p>
        </div>
      </div>
      <div className=" col-sm row">
        <span className="fa-stack fa-2x col-3">
          <i className="fa fa-circle fa-stack-2x icon-back-3" />
          <i className="fa fa-users fa-stack-1x fa-inverse" />
        </span>
        <div className="col-9">
          <h2>{users.length}</h2>
          <p>Total</p>
        </div>
      </div>
    </div>
  )
}

export default SignUpStats
