import React, { Component } from 'react'
import { Table } from 'react-virtualized'

class UserTable extends Component {
  state = {
    searchTerm: '',
    searchResults: []
  }

  handleSearch = e => {
    this.setState({
      searchTerm: e.target.value,
      searchResults: this.state.searchTerm
        ? this.props.users.filter(
            user =>
              `${user.firstName} ${user.lastName}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0
          )
        : this.state.searchResults.filter(
            user =>
              `${user.firstName} ${user.lastName}`
                .toUpperCase()
                .indexOf(this.state.searchTerm.toUpperCase()) >= 0
          )
    })
  }

  render () {
    const { users } = this.props
    return (
      <div>
        <h2>Users</h2>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
        />
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
            {!this.state.searchTerm ? (
              users.map(user => {
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
              })
            ) : (
              this.state.searchResults.map(user => {
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
              })
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserTable
