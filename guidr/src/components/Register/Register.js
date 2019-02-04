import React, { Component } from 'react'

import './_register.scss'
export default class Register extends Component {
    register = (e) => {
        e.preventDefault()
    }
  render() {
    return (
      <div className="registration">
        <div className="header-container">
            <i className="fas fa-map-marked-alt fa-5x"></i>
            <h1>guidr</h1>
        </div>
        <form>
            <input type="text" placeholder="Choose a username"/>
            <input type="text" placeholder="Choose a password"/>
            <button className="button register" onClick={this.register}>Register</button>
        </form>
      </div>
    )
  }
}
