import React, { Component } from 'react';
import Menu from './components/Menu'
import './App.css';
import FoodDetails from './components/FoodDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>MENU</h2>
        </div>
        <div className="section">
          <Menu/>
          <FoodDetails />
        </div>
      </div>
    );
  }
}

export default App;
