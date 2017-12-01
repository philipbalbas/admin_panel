import React, { Component } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

class UserTable extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
    checkboxChecked: false
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
        '...',
        pageNum[pageNum.length - 1],
        'Next >'
      ]
      return slicedPages.map((num, index) => {
        return (
          <a className="graph-button" key={index}>
            {num}
          </a>
        )
      })
    }
    return pageNum.map((num, index) => {
      return (
        <a className="graph-button" key={index}>
          {num}
        </a>
      )
    })
  }

  handleClick = e => {
    this.setState({
      checkboxChecked: !this.state.checkboxChecked
    })
  }

  render () {
    const { searchResults, searchTerm } = this.state
    let searchLength = searchResults.length
    let pages = Math.ceil(searchLength / 10)
    let slicedResults = searchResults.slice(0, 10)
    return (
      <div className="table bg-white">
        <div className="row">
          <span className="col">
            <h4>Users</h4>
          </span>
          <div className="input-group col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={this.handleSearch}
            />
            <span className="input-group-addon">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" onChange={this.handleClick} />
              </th>
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
                  <td>
                    <input
                      type="checkbox"
                      checked={this.state.checkboxChecked}
                      onChange={e => {
                        console.log(e.target.checked)
                        e.target.checked = !e.target.checked
                      }}
                    />
                  </td>
                  <td>{user.id}</td>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{format(user.joinDate, 'MM-DD-YYYY')}</td>
                  <td>
                    <button
                      className={`btn btn-${user.type === 'Customer'
                        ? 'success'
                        : 'danger'}`}
                    >
                      {user.type}
                    </button>
                  </td>
                  <td>
                    <Link to={`/profile/${user.id}`}>
                      <button className="btn btn-outline-secondary">
                        Go To Profile
                      </button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="pages">{this.renderPages(pages)}</div>
      </div>
    )
  }
}

export default UserTable
