import React, { Component } from "react";
import { connect } from "react-redux";
import { clearLoginError } from "../../redux/actions/authActions";
class LoginError extends Component {
  clearLoginError = () => {
    this.props.clearLoginError();
  };
  render() {
    return (
      <div className="login-error-container">
        <div className="logo-container">
          <img alt="guidr" src={require("../../assets/logo_white.png")} />
        </div>
        <h2>Incorrect username or password.</h2>
        <h2>
          Please <span onClick={this.clearLoginError}>log in again.</span>
        </h2>
      </div>
    );
  }
}

export default connect(
  null,
  { clearLoginError }
)(LoginError);
