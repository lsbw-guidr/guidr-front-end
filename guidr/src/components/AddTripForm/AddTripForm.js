import React, { Component } from 'react'

import { connect } from 'react-redux'
class AddTripForm extends Component {
  state = {
    description: "",
    designation: "",
    duration: "",
    img_url: "https://via.placeholder.com/150",
    title: "",
    type: ""
  }
  handleChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div>
        <form>
            <label>What's the name of your trip?</label>
            <input required type="text" name="title" placeholder="Trip Title" value={this.state.title} onChange={this.handleChange} />
            <label>What sort of trip was this? (Rock climbing? Kayaking? Etc.)</label>
            <input required type="text" name="type" placeholder="Trip type" value={this.state.type} onChange={this.handleChange} />            
            <label>Give us a short description of your trip:</label>
            <textarea required type="text" name="description" placeholder="Trip Description" value={this.state.description} onChange={this.handleChange} />
            <label>How long did your trip last?</label>
            <input required type="text" name="duration" placeholder="Duration of trip" value={this.state.duration} onChange={this.handleChange} />
            {/* <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange} /> */}
            <label>Was this trip open to the public, or private?</label>
            
              <input 
                  type="radio" 
                  name="designation"
                  value="public"
                  checked={this.state.designation === "public"}
                  onChange={this.handleChange}
              />
              <label>Public</label>
            
              <input 
                  type="radio" 
                  name="designation"
                  value="private"
                  checked={this.state.designation === "private"}
                  onChange={this.handleChange}
              />
              <label>Private</label>
            <button>Add Trip</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    isUserLoggedIn: state.isUserLoggedIn,
    loggedInUser: state.loggedInUser,
    tripList: state.tripList,
    userInfo: state.userInfo
  })
  export default connect(mapStateToProps, {  })(AddTripForm)