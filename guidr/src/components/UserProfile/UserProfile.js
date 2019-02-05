import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { loginUser, getTrips, getUserInfo } from '../../actions/index'

import TripList from '../TripList/TripList'
import AddTripForm from '../AddTripForm/AddTripForm'
class UserProfile extends Component {
  componentDidMount() {
    const id = localStorage.getItem('userId')
    this.props.getTrips(id)
    this.props.getUserInfo(id)
  }
  render() {
    return (
      <div>
        {this.props.isUserLoggedIn ? <h1>YOU ARE LOGGED IN</h1> : <h1>NOT LOGGED IN REEEEEEEEEEEEE</h1>}
        {/* USER PROFILE INFO */}
        <div className="profile-card">
          <h2>{this.props.userInfo.name}</h2>
          <p>Career Length: {this.props.userInfo.careerLength}</p>
          <p>{this.props.userInfo.tagline}</p>
          <p>{this.props.tripList.length} trips taken</p>
        </div>
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

export default connect(mapStateToProps, {loginUser, getTrips, getUserInfo})(UserProfile)