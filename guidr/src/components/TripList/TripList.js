import React from "react";
import "./_triplist.scss";

import { connect } from "react-redux";
import { loginUser, getUserInfo } from "../../redux/actions/authActions";
import TripWidget from "../TripWidget/TripWidget";
class TripList extends React.Component {
  render() {
    if (this.props.tripList.length === 0) {
      return (
        <div className="no-trips">
          <h2>
            You have no registered trips yet! Click "Add Trip" to add trips to
            your profile.
          </h2>
        </div>
      );
    } else {
      return (
        <div className="trip-list-container">
          {this.props.tripList.map(trip => {
            return <TripWidget key={trip.id} trip={trip} />;
          })}
        </div>
      );
    }
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
  { loginUser, getUserInfo }
)(TripList);
