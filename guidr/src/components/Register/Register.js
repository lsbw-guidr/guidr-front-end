import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./_register.scss";

import { connect } from "react-redux";
import { LoginLoading } from "../Loading/Loading";
import { registerNewUser, getUserInfo } from "../../redux/actions/authActions";
class Register extends Component {
  state = {
    name: "",
    username: "",
    age: 0,
    careerLength: "",
    password: "",
    title: "",
    tagline: ""
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
  register = e => {
    e.preventDefault();
    this.props.registerNewUser(this.state);
  };
  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="registration">
        <div className="logo-container">
          <img alt="guidr" src={require("../../assets/logo_white.png")} />
        </div>
        <form>
          <label>What's your name?</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <label>How old are you?</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <label>How long have you been a guide?</label>
          <input
            type="text"
            name="careerLength"
            value={this.state.careerLength}
            onChange={this.handleChanges}
          />
          <label>What type of guide are you?</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChanges}
          />
          <label>Give a short description of yourself:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChanges}
          />
          <label>Pick a username:</label>
          <input
            type="text"
            name="username"
            placeholder="Choose a username"
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <label>Choose a strong password:</label>
          <input
            type="text"
            name="password"
            placeholder="Choose a password"
            value={this.state.password}
            onChange={this.handleChanges}
          />
          {this.props.loading ? (
            <button className="button register">
              <LoginLoading />
            </button>
          ) : (
            <button className="button register" onClick={this.register}>
              Register
            </button>
          )}
          <p>
            Already have an account? <Link to={"/login"}>Log In</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.authReducer.loading,
  isUserLoggedIn: state.authReducer.isUserLoggedIn,
  loggedInUser: state.authReducer.loggedInUser,
  userInfo: state.authReducer.userInfo
});

export default connect(
  mapStateToProps,
  { registerNewUser, getUserInfo }
)(Register);
