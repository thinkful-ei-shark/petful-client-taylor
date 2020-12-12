import './index.css';
import React, { Component } from 'react';
import Adoption from './Components/Adoption';
import Home from './Components/Home';
import { fetchPeople, fetchPets } from './services/api-service';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    people: [],
    pets: [],
    error: null,
  };

  addPerson = newPerson => {
    this.setState({
      people: [...this.state.people, newPerson],
    });
  };

  componentDidMount() {
    let promises = [fetchPeople(), fetchPets()];
    Promise.all(promises)
      .then(values =>
        this.setState({
          people: values[0],
          pets: values[1],
        })
      )
      .catch(error => {
        this.setState({
          error,
        });
      });
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route
            path='/adopt'
            render={props => (
              <Adoption
                {...props}
                addPerson={this.addPerson}
                people={this.state.people}
                pets={this.state.pets}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
