import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { loginUser, getTrips, getUserInfo } from '../../actions/index'

import TripList from '../TripList/TripList'
import AddTripForm from '../AddTripForm/AddTripForm'
class UserProfile extends Component {
  render() {
    return (
      <div>
        {/* USER PROFILE INFO */}
        {/* NAV LINKS, ONE TO THE TRIP LIST (DEFAULT) AND THE OTHER TO ADD TRIP FORM  */}
        <div>
            <Link to={`/${this.props.userInfo.username}/profile/my-trips`}>My Trips</Link>
            <Link to={`/${this.props.userInfo.username}/profile/my-trips/add-trip`}>Add Trip</Link>
        </div>
        <Route exact path="/:username/profile/my-trips" render={props => <TripList {...props} />} />
        <Route path="/:username/profile/my-trips/add-trip" render={props => <AddTripForm {...props} />} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    isUserLoggedIn: state.isUserLoggedIn,
    loggedInUser: state.loggedInUser,
    tripList: state.tripList,
    userInfo: state.userInfo
  })

export default connect(mapStateToProps, {})(UserProfile)