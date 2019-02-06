import React, { Component } from 'react'

import { connect } from 'react-redux'

import { deleteTrip } from '../../actions/index'
class TripPage extends Component {
    state = {
        tripList: [],
        trip: {}
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
    deleteTrip = e => {
        e.preventDefault()
        this.props.deleteTrip(this.state.trip.id)
        this.props.history.push(`/${this.props.userInfo.username}/profile/my-trips`)
    }
  render() {
      if(this.props.isUserLoggedIn === false) {
          return <h1>PLEASE LOG IN</h1>
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
            <button>Update Trip</button> 
            <button onClick={this.deleteTrip}>Delete Trip</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    userInfo: state.userInfo,
    tripList: state.tripList,
    isUserLoggedIn: state.isUserLoggedIn
})
export default connect(mapStateToProps, { deleteTrip } )(TripPage)