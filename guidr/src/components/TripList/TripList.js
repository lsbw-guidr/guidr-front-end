import React from 'react'
import './_triplist.scss'

import { connect } from 'react-redux'
import { loginUser } from '../../actions/index'
const TripList = (props) => {
  return (
    <div>
      {props.isUserLoggedIn ? <h1>YOU ARE LOGGED IN</h1> : <h1>YOU MORON</h1>}
    </div>
  )
}

const mapStateToProps = state => ({
  isUserLoggedIn: state.isUserLoggedIn
})
export default connect(mapStateToProps, { loginUser })(TripList)
