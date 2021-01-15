import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import AppBar from './components/AppBar';

class App extends Component {

  render() {
    return (
      <div>
        <AppBar />
        <HomePage />      
    </div>
    );
  }
}

export default App;
