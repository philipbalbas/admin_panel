// @flow

import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Sidebar from './Sidebar'
import SignUpStats from './SignUpStats'
import SignUpGraph from './SignUpGraph'
import AgeGroupGraph from './AgeGroupGraph'
import UserTable from './UserTable'

class Dashboard extends Component {
  state = {}

  render () {
    const { loading } = this.props.data
    return (
      <div>
        <h1>Signups</h1>
        <p>The spectacle before us was indeed sublime</p>
        <Sidebar />
        {!loading && (
          <div>
            <SignUpStats users={this.props.data.allUsers} />
            <SignUpGraph users={this.props.data.allUsers} />
            <AgeGroupGraph users={this.props.data.allUsers} />
            <UserTable users={this.props.data.allUsers} />
          </div>
        )}
      </div>
    )
  }
}

const query = gql`
  query allUsers {
    allUsers {
      id
      firstName
      lastName
      joinDate
      email
      phoneNumber
      sex
      age
    }
  }
`

export default graphql(query)(Dashboard)
