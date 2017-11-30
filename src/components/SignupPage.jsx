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
      {!loading && (
        <div>
          <h1>Signups</h1>
          <p>Here's a list of your users</p>
        </div>
      )}
      {!loading ? (
        <div className="analytics">
          <SignUpStats users={props.data.allUsers} />
          <SignUpGraph users={props.data.allUsers} />
          <AgeGroupGraph users={props.data.allUsers} />
          <UserTable users={props.data.allUsers} />
        </div>
      ) : (
        <h1>Loading Page</h1>
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
      type
    }
  }
`

export default graphql(query)(SignupPage)
