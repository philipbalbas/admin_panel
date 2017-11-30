import React from 'react'

const UserTable = ({ users }) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">EMAIL</th>
        <th scope="col">MOBILE</th>
        <th scope="col">SIGNED UP</th>
        <th scope="col">TYPE</th>
        <th scope="col">ACTIONS</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => {
        return (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>
              {user.firstName} {user.lastName}
            </td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.joinDate}</td>
            <td>TYPE</td>
            <td>ACTIONS</td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

export default UserTable
