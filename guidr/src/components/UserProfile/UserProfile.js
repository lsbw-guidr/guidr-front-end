import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { loginUser, getTrips, getUserInfo, updateUser } from '../../actions/index'

import UserNavBar from '../UserNavBar/UserNavBar'
import TripList from '../TripList/TripList'
import AddTripForm from '../AddTripForm/AddTripForm'
class UserProfile extends Component {
  state = {
    isUpdating: false,
    userInfo: {},

  }
  componentDidMount() {
    const id = localStorage.getItem('userId')
    this.props.getTrips(id)
    this.props.getUserInfo(id)
    this.setState({
      userInfo: this.props.userInfo
    })
  }
  toggleUpdate = e => {
    e.preventDefault()
    this.setState({
      isUpdating: true
    })
  }
  handleChanges = e => {
    this.setState({
       userInfo: {
          ...this.state.userInfo,
          [e.target.name] : e.target.value
       }
    })
 }
 saveUpdates = e => {
    e.preventDefault()
    this.props.updateUser(this.props.loggedInUser.id, this.state.userInfo)
    this.setState({
        isUpdating: false
    })
}
  render() {
    if(this.state.isUpdating) {
      return(
        <div>
          <UserNavBar />
          <label>Name: </label>
          <input type="text" name="name" value={this.state.userInfo.name} onChange={this.handleChanges}/>
          <label>Career Length: </label>
          <input type="text" name="careerLength" value={this.state.userInfo.careerLength} onChange={this.handleChanges}/>
          <label>Tagline: </label>
          <input type="text" name="tagline" value={this.state.userInfo.tagline} onChange={this.handleChanges}/>
          <button onClick={this.saveUpdates}>Save Updates</button>
        </div>
      )
    }
    return (
      <div>
        <UserNavBar />
        {this.props.isUserLoggedIn ? <h1>YOU ARE LOGGED IN</h1> : <h1>NOT LOGGED IN REEEEEEEEEEEEE</h1>}
        {/* USER PROFILE INFO */}
        <div className="profile-card">
          <h2>{this.props.userInfo.name}</h2>
          <p>Career Length: {this.props.userInfo.careerLength}</p>
          <p>{this.props.userInfo.tagline}</p>
          <p>{this.props.tripList.length} trips taken</p>
          <button onClick={this.toggleUpdate}>Update Info</button>
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

export default connect(mapStateToProps, {loginUser, getTrips, getUserInfo, updateUser})(UserProfile)