import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import jsPDF from 'jspdf'
import { connect } from 'react-redux'

import SignUpStats from './SignUpStats'
import SignUpGraph from './SignUpGraph'
import AgeGroupGraph from './AgeGroupGraph'
import UserTable from './UserTable'

class SignupPage extends Component {
  downloadPDF = () => {
    const doc = new jsPDF()
    doc.text(`Users stats`, 10, 10)
    doc.text(`Signed up today: ${this.props.signedUpToday}`, 10, 20)
    doc.text(`Signed up this month: ${this.props.signedUpThisMonth}`, 10, 30)
    doc.text(`Total users: ${this.props.data.allUsers.length}`)
    doc.save('BioMark_data.pdf')
  }

  render () {
    const { loading } = this.props.data

    return (
      <div className="page">
        {!loading && (
          <div className="row">
            <span className="col">
              <h1>Signups</h1>
              <p>Here's a list of your users</p>
            </span>
            <span className="col-3">
              <button
                onClick={this.downloadPDF}
                className="btn btn-secondary btn-lg"
              >
                Download Data
              </button>
            </span>
          </div>
        )}
        {!loading ? (
          <div className="analytics">
            <SignUpStats users={this.props.data.allUsers} />
            <SignUpGraph users={this.props.data.allUsers} />
            <AgeGroupGraph users={this.props.data.allUsers} />
            <UserTable users={this.props.data.allUsers} />
          </div>
        ) : (
          <h1>Loading Page</h1>
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
      type
    }
  }
`

function mapStateToProps ({ signedUpToday, signedUpThisMonth }) {
  return { signedUpToday, signedUpThisMonth }
}

const withRedux = Component => connect(mapStateToProps)(Component)

export default graphql(query)(withRedux(SignupPage))
