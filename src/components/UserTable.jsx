import React, { Component } from 'react'

class UserTable extends Component {
  state = {
    searchTerm: '',
    searchResults: []
  }

  componentDidMount () {
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

  renderPages = pages => {
    const pageNum = []
    for (let i = 1; i < pages + 1; i++) {
      pageNum.push(i)
    }

    if (pageNum.length > 10) {
      const slicedPages = [
        ...pageNum.slice(0, 10),
        '.',
        '.',
        '.',
        pageNum[pageNum.length - 1]
      ]
      return slicedPages.map(num => {
        return <span>{num}</span>
      })
    }
    return pageNum.map(num => {
      return <span>{num}</span>
    })
  }

  render () {
    const { searchResults, searchTerm } = this.state
    let searchLength = searchResults.length
    let pages = Math.ceil(searchLength / 10)
    let slicedResults = searchResults.slice(0, 10)
    return (
      <div className="table bg-white">
        <h2>Users</h2>
        <input type="text" value={searchTerm} onChange={this.handleSearch} />
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
            {slicedResults.map(user => {
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
        {this.renderPages(pages)}
      </div>
    )
  }
}

export default UserTable
