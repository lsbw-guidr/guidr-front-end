import React from 'react'
import './_welcome-page.scss'

import { Link } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="header-container">
        <i className="fas fa-map-marked-alt fa-5x"></i>
        <h1>guidr</h1>
      </div>  
      <h2>Your adventure awaits.</h2>
      <button className="button register">Register</button>
      <button className="button log-in">Log In</button>
    </div>
  )
}

export default WelcomePage
