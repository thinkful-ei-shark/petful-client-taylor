import './index.css';
import React, { Component } from 'react';
import CatAdoption from './Components/CatAdoption';
import DogAdoption from './Components/DogAdoption';
import Home from './Components/Home';
import {
  fetchPeople,
  fetchPets,
  fetchDogs,
  fetchCats,
} from './services/api-service';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    people: [],
    pets: [],
    catList: [],
    dogList: [],
    cats: [],
    dogs: [],
    error: null,
  };

  dogListAdd = newPerson => {
    this.setState({
      dogList: [...this.state.dogList, newPerson],
    });
  };

  catListAdd = newPerson => {
    this.setState({
      catList: [...this.state.catList, newPerson],
    });
  };

  adopt = () => {
    this.setState({
      pets: this.state.pets.first,
    });
  };

  componentDidMount() {
    let promises = [fetchPeople(), fetchPets(), fetchDogs(), fetchCats()];
    Promise.all(promises)
      .then(values =>
        this.setState({
          people: values[0],
          pets: values[1],
          dogs: values[2],
          cats: values[3],
        })
      )
      .catch(error => {
        this.setState({
          error,
        });
      });
  }
  render() {
    console.log(this.state.dogList);
    console.log(this.state.people);
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route
            path='/cat-adopt'
            render={props => (
              <CatAdoption
                {...props}
                adopt={this.adopt}
                catListAdd={this.catListAdd}
                people={this.state.people}
                catList={this.state.catList}
                pets={this.state.pets}
                cats={this.state.cats}
              />
            )}
          />
          <Route
            path='/dog-adopt'
            render={props => (
              <DogAdoption
                {...props}
                adopt={this.adopt}
                dogListAdd={this.dogListAdd}
                people={this.state.people}
                dogList={this.state.dogList}
                pets={this.state.pets}
                dogs={this.state.dogs}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
