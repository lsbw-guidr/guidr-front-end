import React from 'react'
import './_triplist.scss'

import { connect } from 'react-redux'
import { loginUser, getTrips, getUserInfo } from '../../actions/index'

import TripWidget from '../TripWidget/TripWidget'
class TripList extends React.Component {
  componentDidMount() {
    // console.log(this.props.loggedInUser.id)
    // this.props.getTrips(this.props.loggedInUser.id)
    const id = localStorage.getItem('userId')
    this.props.getTrips(id)
    this.props.getUserInfo(id)
  }
  render() {
    return (
    <div>
      {this.props.tripList.map(trip => {
        return <TripWidget key={trip.id} trip={trip} />
      })}
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
export default connect(mapStateToProps, { loginUser, getTrips, getUserInfo })(TripList)
