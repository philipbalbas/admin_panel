// @flow

import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import SignUpStats from './SignUpStats'
import UserStats from './UserStats'
import UserTable from './UserTable'

class SignUpReportPage extends Component {
  state = {}

  render () {
    const { loading } = this.props.data
    return (
      <div>
        <h1>Signups</h1>
        <p>Here's a list of your users</p>
        {!loading && (
          <div>
            <SignUpStats users={this.props.data.allUsers} />
            <UserStats users={this.props.data.allUsers} />
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

export default graphql(query)(SignUpReportPage)
