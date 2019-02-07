import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteTrip, updateTrip } from '../../actions/index'

import UserNavBar from '../UserNavBar/UserNavBar'

import './_trip-page.scss'

class TripPage extends Component {
    state = {
        tripList: [],
        trip: {},
        isTripUpdating: false
    }
    componentDidMount() {
        this.setState({
            tripList: this.props.tripList
        },() => {console.log(this.state);this.retrieveTrip()})
       
    }
    retrieveTrip = () => {
        const trip = this.state.tripList.find(
            trip => `${trip.id}` === this.props.match.params.id
        )
        this.setState({
            trip: trip
        })
    }

    handleChanges = e => {
        this.setState({
           trip: {
              ...this.state.trip,
              [e.target.name] : e.target.value
           }
        })
     }
    deleteTrip = e => {
        e.preventDefault()
        this.props.deleteTrip(this.state.trip.id)
        this.props.history.push(`/${this.props.userInfo.username}/profile/my-trips`)
    }
    toggleUpdating = e => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                isTripUpdating: !prevState.isTripUpdating
            }
        })
    }
    saveUpdates = e => {
        e.preventDefault()
        // this.props.updateTrip(this.props.loggedInUser.id, this.state.trip.id, this.state.trip)
        this.props.updateTrip(this.state.trip.id, this.state.trip)
        this.setState({
            isTripUpdating: false
        })
    }
    cancelUpdate = e => {
        e.preventDefault()
        this.setState({
            isTripUpdating: false,
        })
      }
  render() {
    //   if(this.props.isUserLoggedIn === false) {
    //       return <h1>PLEASE LOG IN</h1>
    //   }
      if(this.state.isTripUpdating) {
          return (
              <div>
                <UserNavBar />
              <form className="update-trip-form-container">
                    <div className="trip-types">
                        <label className="main-label">Trip Type:</label>
                        <input
                            required 
                            type="radio" 
                            name="designation"
                            value="Professional"
                            checked={this.state.trip.designation === "Professional"}
                            onChange={this.handleChanges}
                        />
                        <label>Professional</label>
            
                        <input 
                            required
                            type="radio" 
                            name="designation"
                            value="Private"
                            checked={this.state.trip.designation === "Private"}
                            onChange={this.handleChanges}
                        />
                        <label>Private</label>            
                    </div>
                    <div className="edit-trip-main-inputs">
                        <label>Trip title: </label>
                        <input type="text" name="title" value={this.state.trip.title} onChange={this.handleChanges}/>
                        <label>Trip duration (in hours):</label>
                        <input type="text" name="duration" value={this.state.trip.duration} onChange={this.handleChanges}/>
                        <label>Give a brief description of your trip: </label>
                        <textarea type="text" name="description" value={this.state.trip.description} onChange={this.handleChanges}/>
                        <label>Trip Image URL: </label>
                        <input type="text" name="img_url" value={this.state.trip.img_url} onChange={this.handleChanges}/>                    
                    </div>

                  <div className="button-container">
                    <button className="button cancel" onClick={this.cancelUpdate}>Cancel</button>
                    <button className="button update" onClick={this.saveUpdates}>Save Updates</button>                  
                  </div>

              </form>
              </div>
          )
      }
    return (
        <div>
            <UserNavBar />
            <div className="trip-page">
                <div className="trip-info">
                    <div className="trip-text-info">
                        <h2>{this.state.trip.title}</h2>
                        <p>{this.state.trip.designation} Trip</p>
                        <p>Trip duration: {this.state.trip.duration} hours</p>
                        <p>Description: {this.state.trip.description}</p>
                    </div>

                    <div className="trip-page-img-container">
                        <img src={this.state.trip.img_url} alt={this.state.trip.description} />
                    </div>
                </div>
                <div className="button-container">
                    {!this.state.isTripUpdating && <button className="button update" onClick={this.toggleUpdating}>Update Trip</button>} 
                    <button className="button delete" onClick={this.deleteTrip}>Delete Trip</button>
                </div>
                <div className="back-link-container">
                    <Link to={`/${this.props.userInfo.username}/profile/my-trips`}>
                        <i className="fas fa-arrow-left fa-3x"></i>
                        <p>Back to my profile</p>
                    </Link>
                </div>
                
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    userInfo: state.userInfo,
    tripList: state.tripList,
    isUserLoggedIn: state.isUserLoggedIn
})
export default connect(mapStateToProps, { deleteTrip, updateTrip } )(TripPage)