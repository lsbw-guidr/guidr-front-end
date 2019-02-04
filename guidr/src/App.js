import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import './Main-Styles/App.scss';
import WelcomePage from './components/WelcomePage/WelcomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route path="/welcome" render={props => <WelcomePage {...props} />} />
      </div>
    );
  }
}

export default App;
