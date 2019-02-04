import React from 'react'
import './_triplist.scss'

import { connect } from 'react-redux'
import { loginUser, getTrips } from '../../actions/index'
class TripList extends React.Component {
  componentDidMount() {
    // console.log(this.props.loggedInUser.id)
    // this.props.getTrips(this.props.loggedInUser.id)
    const id = localStorage.getItem('userId')
    this.props.getTrips(id)
  }
  render() {
    return (
    <div>
      {this.props.isUserLoggedIn ? <h1>YOU ARE LOGGED IN</h1> : <h1>YOU MORON</h1>}
      {this.props.tripList.map(trip => {
        return <p>{trip.title}</p>
      })}
    </div>
  )
}
}

const mapStateToProps = state => ({
  isUserLoggedIn: state.isUserLoggedIn,
  loggedInUser: state.loggedInUser,
  tripList: state.tripList
})
export default connect(mapStateToProps, { loginUser, getTrips })(TripList)
