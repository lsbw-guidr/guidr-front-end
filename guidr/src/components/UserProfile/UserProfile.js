import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import { connect } from "react-redux";
import {
  loginUser,
  getUserInfo,
  updateUser,
  toggleUserUpdate
} from "../../redux/actions/authActions";
import { getTrips } from "../../redux/actions/tripActions";
import UserNavBar from "../UserNavBar/UserNavBar";
import TripList from "../TripList/TripList";
import AddTripForm from "../AddTripForm/AddTripForm";
import EditUserInfo from "../EditUserInfo/EditUserInfo";
import { Loading } from "../Loading/Loading";
class UserProfile extends Component {
  state = {
    isUpdating: false,
    userInfo: {}
  };
  componentDidMount() {
    const id = localStorage.getItem("userId");
    this.props.getTrips(id);
    this.setState({
      userInfo: this.props.userInfo
    });
  }
  componentWillReceiveProps(newProps) {
    const id = localStorage.getItem("userId");
    if (newProps.deletingTrip === true || newProps.addingTrip === true) {
      this.props.getTrips(id);
    }
    if (newProps.isUserInfoUpdating === true) {
      this.props.getUserInfo(id);
    }
  }
  toggleUpdate = e => {
    e.preventDefault();
    this.setState({
      isUpdating: true
    });
  };
  handleChanges = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };
  saveUpdates = state => {
    const id = localStorage.getItem("userId");
    this.props.updateUser(id, state);
    this.setState({
      isUpdating: false
    });
    this.props.getUserInfo(id);
  };
  cancelAction = e => {
    e.preventDefault();
    this.setState({
      isUpdating: false,
      userInfo: {}
    });
  };
  render() {
    if (
      this.props.loadingTrips ||
      this.props.loadingUser ||
      this.props.deletingTrip ||
      this.props.addingTrip
    ) {
      return <Loading />;
    } else if (this.state.isUpdating) {
      return (
        <div>
          <UserNavBar />
          <EditUserInfo
            userInfo={this.props.userInfo}
            saveUpdates={this.saveUpdates}
            cancelAction={this.cancelAction}
          />
        </div>
      );
    } else
      return (
        <div>
          <UserNavBar />
          <div className="profile-card">
            <div className="profile-info">
              <h2>{this.props.userInfo.name}</h2>
              <p>{this.props.userInfo.title}</p>
              <p>
                {this.props.userInfo.careerLength} as a private and professional
                guide
              </p>
              <p>{this.props.tripList.length} trips taken</p>
              <p>{this.props.userInfo.tagline}</p>
            </div>

            <button onClick={this.toggleUpdate}>
              <i className="fas fa-edit" />
            </button>
          </div>
          <div className="link-container">
            <NavLink
              exact
              to={`/profile/my-trips`}
              // to={`/${this.props.userInfo.username}/profile/my-trips`}
            >
              My Trips
            </NavLink>
            <NavLink
              to={`/profile/my-trips/add-trip`}
              // to={`/${this.props.userInfo.username}/profile/my-trips/add-trip`}
            >
              Add Trip
            </NavLink>
          </div>
          <Route
            exact
            path="/profile/my-trips"
            // path="/:username/profile/my-trips"
            render={props => <TripList {...props} />}
          />
          <Route
            path="/profile/my-trips/add-trip"
            // path="/:username/profile/my-trips/add-trip"
            render={props => <AddTripForm {...props} />}
          />
        </div>
      );
  }
}

const mapStateToProps = state => ({
  loadingUser: state.authReducer.loading,
  loadingTrips: state.tripReducer.loading,
  deletingTrip: state.tripReducer.deletingTrip,
  addingTrip: state.tripReducer.addingTrip,
  isUserLoggedIn: state.authReducer.isUserLoggedIn,
  loggedInUser: state.authReducer.loggedInUser,
  userInfo: state.authReducer.userInfo,
  isUserInfoUpdating: state.authReducer.isUserInfoUpdating,
  tripList: state.tripReducer.tripList
});

export default connect(
  mapStateToProps,
  { loginUser, getUserInfo, updateUser, toggleUserUpdate, getTrips }
)(UserProfile);
