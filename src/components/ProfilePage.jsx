import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { format } from 'date-fns'

const ProfilePage = props => {
  const { loading } = props.data

  if (!loading) {
    const {
      firstName,
      lastName,
      id,
      joinDate,
      sex,
      type,
      phoneNumber,
      email,
      age
    } = props.data.User
    return (
      <div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <h3>Account Type: {type}</h3>
        <h3>Join Date: {format(joinDate, 'MM-DD-YYYY')}</h3>
        <p>Age: {age}</p>
        <p>Sex: {sex}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Email: {email}</p>
      </div>
    )
  } else {
    return <h1>Loading Page</h1>
  }
}

const query = gql`
  query getUser($id: ID!) {
    User(id: $id) {
      id
      firstName
      lastName
      joinDate
      sex
      type
      phoneNumber
      email
      age
    }
  }
`

export default graphql(query, {
  options: props => ({ variables: { id: props.match.params.id } })
})(ProfilePage)
