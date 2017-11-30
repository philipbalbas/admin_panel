import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import SignUpStats from './SignUpStats'
import SignUpGraph from './SignUpGraph'
import AgeGroupGraph from './AgeGroupGraph'
import UserTable from './UserTable'

const SignupPage = props => {
  const { loading } = props.data

  return (
    <div className="page">
      <h1>Signups</h1>
      <p>Here's a list of your users</p>
      {!loading && (
        <div className="analytics">
          <SignUpStats users={props.data.allUsers} />
          <SignUpGraph users={props.data.allUsers} />
          <AgeGroupGraph users={props.data.allUsers} />
          <UserTable users={props.data.allUsers} />
        </div>
      )}
    </div>
  )
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

export default graphql(query)(SignupPage)
