import React, { Component } from "react";

import { Route } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import "./Main-Styles/App.scss";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Register from "./components/Register/Register";
import LogIn from "./components/LogIn/LogIn";
import UserProfile from "./components/UserProfile/UserProfile";
import TripPage from "./components/TripPage/TripPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <WelcomePage {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
        <Route path="/login" render={props => <LogIn {...props} />} />
        <Route
          path="/:username/profile/my-trips"
          render={props => <UserProfile {...props} />}
        />
        <Route
          path="/:username/trip-view/:id"
          render={props => <TripPage {...props} />}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isUserLoggedIn: state.authReducer.isUserLoggedIn
});
export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
