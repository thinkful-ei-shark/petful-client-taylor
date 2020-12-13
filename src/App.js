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
  fetchDogList,
  fetchCatList,
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

  removeDogPerson = () => {};

  removeCatPerson = () => {};

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

  adoptCat = () => {
    this.setState({
      cats: this.state.cats,
    });
  };

  adoptDog = () => {
    this.setState({
      dogs: this.state.dogs,
    });
  };

  componentDidMount() {
    let promises = [
      fetchPeople(),
      fetchPets(),
      fetchDogs(),
      fetchCats(),
      fetchDogList(),
      fetchCatList(),
    ];
    Promise.all(promises)
      .then(values =>
        this.setState({
          people: values[0],
          pets: values[1],
          dogs: values[2],
          cats: values[3],
          dogList: values[4],
          catList: values[5],
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
            path='/cat-adopt'
            render={props => (
              <CatAdoption
                {...props}
                adoptCat={this.adoptCat}
                removeCatPerson={this.removeCatPerson}
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
                adoptDog={this.adoptDog}
                removeCatPerson={this.removeDogPerson}
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
