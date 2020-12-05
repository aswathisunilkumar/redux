import React, { Component } from 'react';
import Menu from './components/Menu'
import './App.css';
import FoodDetails from './components/FoodDetails';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>LA CARTE</h2>
        </div>
        <Menu/>
        <FoodDetails />
      </div>
    );
  }
}

export default App;
