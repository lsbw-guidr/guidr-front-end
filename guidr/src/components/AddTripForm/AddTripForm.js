import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addNewTrip } from '../../actions/index'
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
  addNewTrip = e => {
    e.preventDefault()
    this.props.addNewTrip(this.props.loggedInUser.id, this.state)
    this.props.history.push(`/${this.props.userInfo.username}/profile/my-trips`)
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
                  value="Professional"
                  checked={this.state.designation === "Professional"}
                  onChange={this.handleChange}
              />
              <label>Professional</label>
            
              <input 
                  type="radio" 
                  name="designation"
                  value="Private"
                  checked={this.state.designation === "Private"}
                  onChange={this.handleChange}
              />
              <label>Private</label>
            <button onClick={this.addNewTrip}>Add Trip</button>
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
  export default connect(mapStateToProps, { addNewTrip })(AddTripForm)