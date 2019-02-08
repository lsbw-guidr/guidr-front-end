import React from 'react'
import './_welcome-page.scss'


class WelcomePage extends React.Component {
  goToRegisterPage = e => {
    e.preventDefault()
    this.props.history.push('/register')
  }
  goToLogInPage = e => {
    e.preventDefault()
    this.props.history.push('/login')
  }
  render() {
    return (
      <div className="welcome-page">
        <div className="welcome-container">
          <div className="header-container">

            {/* <i className="fas fa-map-marked-alt fa-5x"></i>
        <h1>guidr</h1> */}
            <img alt="guidr" src={require('../../assets/logo_white.png')} />
          </div>
        
        <h2>Your adventure awaits...</h2>
        <button className="button register" onClick={this.goToRegisterPage}>Register</button>
        <button className="button log-in" onClick={this.goToLogInPage}>Log In</button>
      </div>
      </div>
    )
  }
}

export default WelcomePage
