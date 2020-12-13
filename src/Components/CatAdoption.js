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
    adoptPet().then(pet => {
      this.props.adopt(pet)
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { person } = e.target;
    postPerson(person.value)
      .then(newPerson => {
        this.props.catListAdd(newPerson);
      })
      .then(() => {
        this.props.history.push('/cat-adopt');
      });
  };
  render() {
    // maps over the people in the database and prints them in a list
    const catList = this.props.catList;

    const catListMap = catList.map(person => {
      return (
        <div className='person'>
          <h3>{person}</h3>
        </div>
      );
    });

    // if there is a list of cats, render them to the page
    let catHTML;
    if (this.props.cats.cat) {
      let cat = this.props.cats.cat;
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

        <h3> Adoptable Cats </h3>

        <div className='list'>{catHTML}</div>
        <div className='queue'>{catListMap}</div>
      </div>
    );
  }
}
