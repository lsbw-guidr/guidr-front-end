import React, { Component } from 'react';

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import {connect} from 'react-redux'

import './Main-Styles/App.scss';
import WelcomePage from './components/WelcomePage/WelcomePage'
import Register from './components/Register/Register'
import LogIn from './components/LogIn/LogIn'
import TripList from './components/TripList/TripList'
class App extends Component {
  componentWillReceiveProps(newProps) {

  }
  render() {
    return (
      <div className="App">
        
        <Route exact path="/" render={props => <WelcomePage {...props} />} />
        <Route path="/register" render={props => <Register {...props} />}/>
        <Route path="/login" render={props => <LogIn {...props} />}/>
        <Route path="/my-trips" render={props => <TripList {...props} />}/>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isUserLoggedIn: state.isUserLoggedIn
})
export default withRouter(connect(mapStateToProps, {})(App));
