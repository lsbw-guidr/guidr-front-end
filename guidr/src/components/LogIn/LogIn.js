import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loginUser, getTrips, getUserInfo } from '../../actions/index'
import './_login.scss'
class LogIn extends Component {
    state = {
        username: '',
        password: ''
    }
    componentDidMount() {
        console.log(this.props)
    }
    componentWillReceiveProps(newProps) {
        if (newProps.userInfo !== this.props.userInfo) {
            this.props.history.push(`/${this.props.userInfo.username}/profile/my-trips`)
        }
    }
    handleChanges = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
      }
      logIn = e => {
          e.preventDefault()
          this.props.loginUser(this.state)
          const id = localStorage.getItem('userId')
          this.props.getUserInfo(id)
      }
  render() {
    return (
      
        <div className="login">
            <div className="header-container">
                <i className="fas fa-map-marked-alt fa-5x"></i>
                <h1>guidr</h1>
                <h1>{this.props.isUserLoggedIn}</h1>
            </div>
            <form>
                <input required type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChanges}/>
                
                <input required type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChanges}/>
                <button className="button register" onClick={this.logIn}>Log In</button>
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
export default connect(mapStateToProps, { loginUser, getTrips, getUserInfo })(LogIn)