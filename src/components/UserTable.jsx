import React, { Component } from 'react'
import { Table } from 'react-virtualized'

class UserTable extends Component {
  state = {
    searchTerm: '',
    searchResults: []
  }

  componentDidMount() {
    this.setState({
      searchResults: this.props.users
    })
  }
  

  handleSearch = e => {
    this.setState({
      searchResults: this.props.users.filter(
            user =>
              `${user.firstName} ${user.lastName}`
                .toUpperCase()
                .indexOf(e.target.value.toUpperCase()) >= 0
          ),
      searchTerm: e.target.value
    })
  }

  render () {
    const { users } = this.props
    const {searchResults, searchTerm} = this.state
    let slicedResults = searchResults.slice(0, 10)
    return (
      <div>
        <h2>Users</h2>
        <input
          type="text"
          value={searchTerm}
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
            {!searchTerm ? (
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
              slicedResults.map(user => {
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
