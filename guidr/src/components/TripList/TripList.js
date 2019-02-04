import React from 'react'
import './_triplist.scss'

import { connect } from 'react-redux'
import { loginUser, getTrips } from '../../actions/index'
class TripList extends React.Component {
  componentDidMount() {
    this.props.getTrips(this.props.loggedInUser.id)
  }
  render() {
    return (
    <div>
      {this.props.isUserLoggedIn ? <h1>YOU ARE LOGGED IN</h1> : <h1>YOU MORON</h1>}
    </div>
  )
}
}

const mapStateToProps = state => ({
  isUserLoggedIn: state.isUserLoggedIn,
  loggedInUser: state.loggedInUser
})
export default connect(mapStateToProps, { loginUser, getTrips })(TripList)
