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
        <div className="header-container">
          <img src={require('./logo.png')} className="logo-img" />
          <h1>guidr</h1>
        </div>
        <h2>Your adventure awaits.</h2>
        <button className="button register" onClick={this.goToRegisterPage}>Register</button>
        <button className="button log-in" onClick={this.goToLogInPage}>Log In</button>
      </div>
    )
  }
}

export default WelcomePage
