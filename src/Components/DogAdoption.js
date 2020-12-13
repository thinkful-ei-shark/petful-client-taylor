import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postPerson, adoptPet } from '../services/api-service';

export default class Adoption extends Component {
  constructor() {
    super();
    this.state = {
      userInput: 0,
    };
  }

  onChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  handleAdoption = e => {
    adoptPet().then(dog => {
      this.props.adoptPet(dog);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { person } = e.target;
    postPerson(person.value)
      .then(newPerson => {
        this.props.dogListAdd(newPerson);
      })
      .then(() => {
        this.props.history.push('/dog-adopt');
      });
  };
  render() {
    // maps over the people in the database and prints them in a list
    const dogList = this.props.dogList;

    const dogListMap = dogList.map(person => {
      return (
        <div className='person'>
          <h3>{person}</h3>
        </div>
      );
    });

    // if there is a list of dogs, render them to the page
    let dogHTML;
    if (this.props.dogs.dog) {
      let dog = this.props.dogs.dog;
      dogHTML = (
        <div className='animal'>
          <img alt='animal to adopt' src={dog.imageURL} />
          <div className='content'>
            <h4> {dog.name} </h4>
            <p> Age: {dog.age} </p>
            <p> Breed: {dog.breed} </p>
            <p> {dog.description} </p>
            <p> {dog.story} </p>
          </div>
          <button onClick={e => this.handleAdoption(e)} className='adopt-me'> Adopt Me! </button>
        </div>
      );
    }
    return (
      <div className='adoption'>
        <Link to='/'>
          <button> Home </button>
        </Link>
        <form className='queue-form' onSubmit={e => this.handleSubmit(e)}>
          <input
            name='person'
            id='person'
            type='text'
            placeholder='Enter Name in Queue'
            onChange={e => this.onChange(e)}
            value={this.state.people}
          ></input>
          <button type='submit'> Submit </button>
        </form>

        <h3> Adoptable Dogs </h3>

        <div className='list'>{dogHTML}</div>
        <div className='queue'>{dogListMap}</div>
      </div>
    );
  }
}
