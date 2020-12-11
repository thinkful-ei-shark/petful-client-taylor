import './index.css';
import React, { Component } from 'react';
import Adoption from './Components/Adoption';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route path='/adopt' component={Adoption} />
        </div>
      </Router>
    );
  }
}
