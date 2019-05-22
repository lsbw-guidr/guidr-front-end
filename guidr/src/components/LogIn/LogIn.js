import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, getUserInfo } from "../../redux/actions/authActions";
import "./_login.scss";

import { LoginLoading } from "../Loading/Loading";
import LoginError from "../LoginError/LoginError";
class LogIn extends Component {
  state = {
    username: "",
    password: ""
  };
  componentWillReceiveProps(newProps) {
    const id = localStorage.getItem("userId");
    if (newProps.isUserLoggedIn !== this.props.isUserLoggedIn) {
      this.props.getUserInfo(id);
    }
    if (newProps.userInfo !== this.props.userInfo) {
      this.props.history.push("/profile/my-trips");
    }
  }
  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  logIn = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };
  render() {
    if (this.props.loginError === true) {
      return <LoginError />;
    } else {
      return (
        <div className="login">
          <div className="login-container">
            <div className="header-container">
              <div className="logo-container">
                <img alt="guidr" src={require("../../assets/logo_white.png")} />
              </div>
            </div>
            <form onSubmit={this.logIn}>
              <input
                required
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChanges}
              />

              <input
                required
                type="text"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChanges}
              />
              {this.props.loading ? (
                <button className="button register">
                  <LoginLoading />
                </button>
              ) : (
                <button type="submit" className="button register">
                  Log In
                </button>
              )}
              <p>
                Don't have an account yet?{" "}
                <span>
                  <Link to={"/register"}>Sign Up</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  loading: state.authReducer.loading,
  isUserLoggedIn: state.authReducer.isUserLoggedIn,
  loginError: state.authReducer.loginError,
  loggedInUser: state.authReducer.loggedInUser,
  tripList: state.tripReducer.tripList,
  userInfo: state.authReducer.userInfo
});
export default connect(
  mapStateToProps,
  { loginUser, getUserInfo }
)(LogIn);
