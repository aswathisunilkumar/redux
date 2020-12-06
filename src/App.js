import React, { Component } from 'react';
import Menu from './components/Menu'
import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import FoodDetails from './components/FoodDetails';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <h2>Restaurante Con Fusión</h2>
          </div>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/dish/:id" component={FoodDetails} />
          </Switch>
        </div>
      </BrowserRouter>   
    );
  }
}
export default App;
