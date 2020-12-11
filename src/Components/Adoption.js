import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  handleSubmit = e => {
    e.preventDefault();
    let input = this.state.userInput;
    
  };
  render() {
    const people = this.props.people;

    // maps over the people in the database and prints them in a list
    const peopleMap = people.map(people => {
      return (
        <div key={people} className='person'>
          <h3>{people}</h3>
        </div>
      );
    });

    // if there is a list of cats, render them to the page
    let catHTML;
    if (this.props.pets.cat) {
      let cat = this.props.pets.cat;
      catHTML = (
        <div className='animal'>
          <img alt='animal to adopt' src={cat.imageURL} />
          <div className='content'>
            <h4> {cat.name} </h4>
            <p> Age: {cat.age} </p>
            <p> Breed: {cat.breed} </p>
            <p> {cat.description} </p>
            <p> {cat.story} </p>
          </div>
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
            type='text'
            placeholder='Enter Name in Queue'
            onChange={e => this.onChange(e)}
          ></input>
          <button type='submit'> Submit </button>
        </form>

        <h3> Adoptable Animals </h3>
        <select>
          <option> Dogs </option>
          <option> Cats </option>
        </select>

        <div className='list'>{catHTML}</div>
        <div className='queue'>{peopleMap}</div>
      </div>
    );
  }
}
