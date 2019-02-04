import React, { Component } from 'react'

import { connect } from 'react-redux'
export default class LogIn extends Component {
    state = {
        username: '',
        password: ''
    }
    handleChanges = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
      }
  render() {
    return (
      
        <div className="login">
            <div className="header-container">
                <i className="fas fa-map-marked-alt fa-5x"></i>
                <h1>guidr</h1>
            </div>
            <form>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChanges}/>
                
                <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChanges}/>
                <button className="button register" onClick={this.register}>Log In</button>
            </form>
        </div>
    
    )
  }
}
