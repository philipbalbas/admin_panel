import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class SignUpStats extends Component {
  componentDidMount () {
    this.props.sendSignedUpToday(this.props.users)
    this.props.sendSignedUpThisMonth(this.props.users)
  }

  render () {
    return (
      <div className="stats row">
        <div className="col-lg-4 col-md-12 row bg-white">
          <span className="fa-stack fa-2x col-3">
            <i className="fa fa-circle fa-stack-2x icon-back-1" />
            <i className="fa fa-users fa-stack-1x fa-inverse" />
          </span>
          <div className="col-9">
            <h2>{this.props.signedUpToday}</h2>
            <p>Today</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 row bg-white">
          <span className="fa-stack fa-2x col-3">
            <i className="fa fa-circle fa-stack-2x icon-back-2" />
            <i className="fa fa-users fa-stack-1x fa-inverse" />
          </span>
          <div className="col-9">
            <h2>{this.props.signedUpThisMonth}</h2>
            <p>This Month</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 row bg-white">
          <span className="fa-stack fa-2x col-3">
            <i className="fa fa-circle fa-stack-2x icon-back-3" />
            <i className="fa fa-users fa-stack-1x fa-inverse" />
          </span>
          <div className="col-9">
            <h2>{this.props.users.length}</h2>
            <p>Total</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ signedUpToday, signedUpThisMonth }) {
  return { signedUpToday, signedUpThisMonth }
}

export default connect(mapStateToProps, actions)(SignUpStats)
