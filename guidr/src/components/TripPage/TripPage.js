import React, { Component } from 'react'

import { connect } from 'react-redux'

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
    
  render() {
      if(localStorage.getItem('userId') === null ) {
          return <h1>PLEASE LOG IN</h1>
      }
    return (
      <div>
        <h1>WELCOME TO THE TRIP PAGE</h1>
        <p>{this.state.trip.title}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    tripList: state.tripList
})
export default connect(mapStateToProps, {} )(TripPage)