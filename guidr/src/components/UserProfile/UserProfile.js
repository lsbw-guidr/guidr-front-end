import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { loginUser, getTrips, getUserInfo, updateUser, toggleUserUpdate } from '../../actions/index'

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
    // this.props.getTrips(id)
    this.props.getTrips()
    this.props.getUserInfo(id)
    this.setState({
      userInfo: this.props.userInfo
    })
  }

  toggleUpdate = e => {
    e.preventDefault()
    
    this.setState({
      isUpdating: true,
      userInfo: this.props.userInfo
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
    const id = localStorage.getItem('userId')
    this.props.getUserInfo(id)
}
cancelAction = e => {
  e.preventDefault()
  this.setState({
    isUpdating: false,
    userInfo: {}
  })
}
  render() {
    if(this.state.isUpdating) {
      return(
        <div>
          <UserNavBar />
          <div className="profile-card edit-profile">
            <label>Name: </label>
            <input type="text" name="name" value={this.state.userInfo.name} onChange={this.handleChanges}/>
            <label>Title: </label>
            <input type="text" name="title" value={this.state.userInfo.title} onChange={this.handleChanges}/>
            <label>Career Length: </label>
            <input type="text" name="careerLength" value={this.state.userInfo.careerLength} onChange={this.handleChanges}/>
            <label>Tagline: </label>
            <textarea type="text" name="tagline" value={this.state.userInfo.tagline} onChange={this.handleChanges}/>
            <div className="button-container">
                <button className="cancel" onClick={this.cancelAction}>Cancel</button>
               <button className="save" onClick={this.saveUpdates}>Save Updates</button>
            </div>
          </div>
          
        </div>
      )
    }
    return (
      <div>
        <UserNavBar />
        {this.props.isUserLoggedIn ? <h1>YOU ARE LOGGED IN</h1> : <h1>NOT LOGGED IN REEEEEEEEEEEEE</h1>}
        {/* USER PROFILE INFO */}
        <div className="profile-card">
          <div className="profile-info">
            <h2>{this.props.userInfo.name}</h2>
            <p>{this.props.userInfo.title}</p>
            <p>{this.props.userInfo.careerLength} as a private and professional guide</p>
            <p>{this.props.tripList.length} trips taken</p>
            <p>{this.props.userInfo.tagline}</p>
          </div>

          
          <button onClick={this.toggleUpdate}><i class="fas fa-edit"></i></button>
        </div>
        {/* NAV LINKS, ONE TO THE TRIP LIST (DEFAULT) AND THE OTHER TO ADD TRIP FORM  */}
        <div className="link-container">
            <NavLink exact to={`/${this.props.userInfo.username}/profile/my-trips`}>My Trips</NavLink>
            <NavLink to={`/${this.props.userInfo.username}/profile/my-trips/add-trip`}>Add Trip</NavLink>
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
    userInfo: state.userInfo,
    isUserInfoUpdating: state.isUserInfoUpdating
  })

export default connect(mapStateToProps, {loginUser, getTrips, getUserInfo, updateUser, toggleUserUpdate})(UserProfile)