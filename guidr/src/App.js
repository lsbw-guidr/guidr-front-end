import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import './Main-Styles/App.scss';
import WelcomePage from './components/WelcomePage/WelcomePage'
import Register from './components/Register/Register'
import LogIn from './components/LogIn/LogIn'
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route path="/welcome" render={props => <WelcomePage {...props} />} />
        <Route path="/register" render={props => <Register {...props} />}/>
        <Route path="/login" render={props => <LogIn {...props} />}/>
      </div>
    );
  }
}

export default App;
