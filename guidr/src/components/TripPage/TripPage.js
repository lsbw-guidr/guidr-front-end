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
  render() {
    //   if(this.props.isUserLoggedIn === false) {
    //       return <h1>PLEASE LOG IN</h1>
    //   }
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
            <UserNavBar />
            <div className="trip-page">
                <div className="trip-info">
                    <div className="trip-text-info">
                        <h2>{this.state.trip.title}</h2>
                        <p>{this.state.trip.designation} Trip</p>
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