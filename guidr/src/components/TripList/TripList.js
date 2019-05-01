import React from "react";
import "./_triplist.scss";

import { connect } from "react-redux";
import { loginUser, getUserInfo } from "../../redux/actions/authActions";
import { getTrips } from "../../redux/actions/tripActions";
import TripWidget from "../TripWidget/TripWidget";
class TripList extends React.Component {
  componentDidMount() {
    const id = localStorage.getItem("userId");
    this.props.getTrips(id);
  }
  render() {
    return (
      <div className="trip-list-container">
        {this.props.tripList.length === 0 && (
          <h2>You have no registered trips yet!</h2>
        )}
        {this.props.tripList.map(trip => {
          return <TripWidget key={trip.id} trip={trip} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isUserLoggedIn: state.authReducer.isUserLoggedIn,
  loggedInUser: state.authReducer.loggedInUser,
  tripList: state.tripReducer.tripList,
  userInfo: state.authReducer.userInfo
});
export default connect(
  mapStateToProps,
  { loginUser, getTrips, getUserInfo }
)(TripList);
