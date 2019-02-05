import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './_trip-widget.scss'
export default class TripWidget extends Component {


  render() {
    return (
      <div className="trip-widget">
        <div className="trip-thumbnail">
            <div className="trip-thumbnail-img-container">
                <img src={this.props.trip.img_url} alt={this.props.trip.description} />
            </div>   
            <p>{this.props.trip.title}</p>
        </div>
        <button>View Trip</button>
      </div>
    )
  }
}
