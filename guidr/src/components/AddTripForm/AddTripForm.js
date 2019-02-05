import React, { Component } from 'react'

import { connect } from 'react-redux'
class AddTripForm extends Component {

  render() {
    return (
      <div>
        <form>
            <input type="text" />
            <input type="text" />
            <button>Add Trip</button>
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
  export default connect(mapStateToProps, {  })(AddTripForm)