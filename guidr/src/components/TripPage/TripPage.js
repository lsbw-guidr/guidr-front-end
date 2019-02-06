import React, { Component } from 'react'

import { connect } from 'react-redux'

class TripPage extends Component {
  render() {
    return (
      <div>
        <h1>WELCOME TO THE TRIP PAGE</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {} )(TripPage)