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
    <div className="stats">
      <div>
        <i className="fa fa-users" aria-hidden="true">
          {usersSignedUpToday.length}
          Today
        </i>
        <i className="fa fa-users" aria-hidden="true">
          {usersSignedThisMonth.length}
          This Month
        </i>
        <i className="fa fa-users" aria-hidden="true">
          {users.length}
          Total
        </i>
      </div>
    </div>
  )
}

export default SignUpStats
