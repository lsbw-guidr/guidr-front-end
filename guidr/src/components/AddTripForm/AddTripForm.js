import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addNewTrip, getTrips } from '../../actions/index'
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
  cancelAction = e => {
    e.preventDefault()
    this.setState({
      description: '',
      designation: '',
      duration: '',
      img_url: "https://via.placeholder.com/150",
      title: '',
      type: ''
    })
    this.props.history.push(`/${this.props.userInfo.username}/profile/my-trips`)
  }
  addNewTrip = e => {
    e.preventDefault()
    // this.props.addNewTrip(this.props.loggedInUser.id, this.state)
    this.props.addNewTrip(this.state)
    this.props.getTrips()
    this.props.history.push(`/${this.props.userInfo.username}/profile/my-trips`)
    

  }
  render() {
    return (
      <div className="add-trip-form-container">
        <form>
            <div className="trip-types">
              <label className="main-label">Trip Type: </label>
              <input
                  required 
                  type="radio" 
                  name="designation"
                  value="Professional"
                  checked={this.state.designation === "Professional"}
                  onChange={this.handleChange}
              />
              <label>Professional</label>
            
              <input 
                  required
                  type="radio" 
                  name="designation"
                  value="Private"
                  checked={this.state.designation === "Private"}
                  onChange={this.handleChange}
              />
              <label>Private</label>            
            </div>
            <div className="trip-inputs-container">
                <div className="trip-input">
                    <label>What's the name of your trip?</label>
                    <input required type="text" name="title" placeholder="Trip Title" value={this.state.title} onChange={this.handleChange} />                
                </div>

                <div className="trip-input">
                    <label>What sort of trip was this? (Rock climbing? Kayaking? Etc.)</label>
                    <input required type="text" name="type" placeholder="Trip type" value={this.state.type} onChange={this.handleChange} />                   
                </div>
 
                <div className="trip-input">
                    <label>Give us a short description of your trip:</label>
                    <textarea required type="text" name="description" placeholder="Trip Description" value={this.state.description} onChange={this.handleChange} />                
                </div>        

                <div className="trip-input">
                    <label>How long did your trip last?</label>
                    <input required type="text" name="duration" placeholder="Duration of trip" value={this.state.duration} onChange={this.handleChange} />                
                </div>

                {/* <input type="text" name="img_url" value={this.state.img_url} onChange={this.handleChange} /> */}
            </div>

            <div className="button-container">
              <button className="button cancel" onClick={this.cancelAction}>Cancel</button>
              <button className="button add" onClick={this.addNewTrip}>Add Trip</button>
            </div>
            
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    isUserLoggedIn: state.isUserLoggedIn,
    loggedInUser: state.loggedInUser,
    tripList: state.tripList,
    userInfo: state.userInfo,
    isUserInfoUpdating: state.isUserInfoUpdating
  })
  export default connect(mapStateToProps, { addNewTrip, getTrips })(AddTripForm)