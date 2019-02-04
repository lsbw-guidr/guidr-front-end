import React, { Component } from 'react';

import './Main-Styles/App.scss';
import WelcomePage from './components/WelcomePage/WelcomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <WelcomePage />
      </div>
    );
  }
}

export default App;
