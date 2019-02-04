import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import './Main-Styles/App.scss';
import WelcomePage from './components/WelcomePage/WelcomePage'
import Register from './components/Register/Register'
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route path="/welcome" render={props => <WelcomePage {...props} />} />
        <Route path="/register" render={props => <Register {...props} />}/>
      </div>
    );
  }
}

export default App;
