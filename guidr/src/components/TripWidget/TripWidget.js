import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./_trip-widget.scss";

import { connect } from "react-redux";
class TripWidget extends Component {
  goToTripView = e => {
    e.preventDefault();
    this.props.history.push(
      `/${this.props.userInfo.username}/trip-view/${this.props.trip.id}`
    );
  };
  render() {
    return (
      <div className="trip-widget">
        <div className="trip-thumbnail">
          <div className="trip-thumbnail-img-container">
            <img
              src={this.props.trip.img_url}
              alt={this.props.trip.description}
            />
          </div>
          <p>{this.props.trip.title}</p>
        </div>
        <button onClick={this.goToTripView}>View Trip</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.authReducer.userInfo
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(TripWidget)
);
