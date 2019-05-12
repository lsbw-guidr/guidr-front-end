import React, { Component } from "react";
import PropTypes from "prop-types";

import "./_edit_user_info.scss";
class EditUserInfo extends Component {
  state = {
    name: "",
    title: "",
    careerLength: "",
    tagline: ""
  };
  componentDidMount() {
    this.setState({
      name: this.props.userInfo.name,
      title: this.props.userInfo.title,
      careerLength: this.props.userInfo.careerLength,
      tagline: this.props.userInfo.tagline
    });
  }
  handleChanges = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="card edit-profile">
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChanges}
        />
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChanges}
        />
        <label>Career Length: </label>
        <input
          type="text"
          name="careerLength"
          value={this.state.careerLength}
          onChange={this.handleChanges}
        />
        <label>Tagline: </label>
        <textarea
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChanges}
        />
        <div className="button-container">
          <button className="cancel" onClick={this.props.cancelAction}>
            Cancel
          </button>
          <button
            className="save"
            onClick={() => this.props.saveUpdates(this.state)}
          >
            Save Updates
          </button>
        </div>
      </div>
    );
  }
}

EditUserInfo.propTypes = {
  userInfo: PropTypes.object,
  cancelAction: PropTypes.func,
  saveUpdates: PropTypes.func
};

export default EditUserInfo;
