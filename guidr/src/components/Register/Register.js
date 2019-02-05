import React, { Component } from 'react'
import axios from 'axios'
import './_register.scss'

import { connect } from 'react-redux'

import { registerNewUser } from '../../actions/index'
class Register extends Component {
  state = {
    name: '',
    username: '',
    age: 0,
    careerLength: '',
    password: '',
  }
  componentWillReceiveProps(newProps) {
    if (newProps.isUserLoggedIn !== this.props.isUserLoggedIn) {
        this.props.history.push('/my-profile')
    }
}
    register = (e) => {
        e.preventDefault()
        this.props.registerNewUser(this.state)
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
      <div className="registration">
        <div className="header-container">
            <i className="fas fa-map-marked-alt fa-5x"></i>
            <h1>guidr</h1>
        </div>
        <form>
            <label>What's your name?</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChanges} />
            <label>How old are you?</label>
            <input type="number" name="age" value={this.state.age} onChange={this.handleChanges} />
            <label>How long have you been a guide?</label>
            <input type="text" name="careerLength" value={this.state.careerLength} onChange={this.handleChanges} />
            <label>Pick a username:</label>
            <input type="text" name="username" placeholder="Choose a username" value={this.state.username} onChange={this.handleChanges}/>
            <label>Choose a strong password:</label>
            <input type="text" name="password" placeholder="Choose a password" value={this.state.password} onChange={this.handleChanges}/>
            <button className="button register" onClick={this.register}>Register</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isUserLoggedIn: state.isUserLoggedIn
})

export default connect(mapStateToProps, { registerNewUser })(Register)