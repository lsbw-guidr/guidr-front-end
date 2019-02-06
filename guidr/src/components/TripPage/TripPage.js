import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteTrip, updateTrip } from '../../actions/index'
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
        this.props.updateTrip(this.props.loggedInUser.id, this.state.trip.id, this.state.trip)
        this.setState({
            isTripUpdating: false
        })
    }
  render() {
      if(this.props.isUserLoggedIn === false) {
          return <h1>PLEASE LOG IN</h1>
      }
      if(this.state.isTripUpdating) {
          return (
              <div>
                  <input type="text" name="title" value={this.state.trip.title} onChange={this.handleChanges}/>
                  <input type="text" name="description" value={this.state.trip.description} onChange={this.handleChanges}/>
                  <button onClick={this.saveUpdates}>Save Updates</button>
              </div>
          )
      }
    return (
      <div>
        <h1>WELCOME TO THE TRIP PAGE</h1>
        <h1>{this.state.trip.title}</h1>
        <p>{this.state.trip.description}</p>
        <div className="trip-page-img-container">
            <img src={this.state.trip.img_url} alt={this.state.trip.description} />
        </div>
        <div className="button-container">
            {!this.state.isTripUpdating && <button onClick={this.toggleUpdating}>Update Trip</button>} 
            <button onClick={this.deleteTrip}>Delete Trip</button>
        </div>
        <Link to={`/${this.props.userInfo.username}/profile/my-trips`}>Back to my profile</Link>
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