import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Adoption extends Component {
  render() {
    const people = this.props.people;
    const peopleMap = people.map(people => {
      return (
        <div className='person'>
          <h3>{people}</h3>
        </div>
      );
    });

    let catHTML;
    if (this.props.pets.cat) {
      catHTML = (
        <div className='animal'>
          <img src={this.props.pets.cat.imageURL} />
        </div> 
      )
    }
    return (
      <div className='adoption'>
        <Link to='/'>
          <button> Home </button>
        </Link>
        <form className='queue-form'>
          <input type='text' placeholder='Enter Name in Queue'></input>
          <button type='submit'> Submit </button>
        </form>
        <h3> Adoptable Animals </h3>
        <select>
          <option> Dogs </option>
          <option> Cats </option>
        </select>

        <div className='list'>
          <div className='animal'>
            <img src={this.props.pets.cat ? this.props.pets.cat.imageURL : null} />
            <p>{this.props.pets.cat ? this.props.pets.cat.name : null}</p>
            <p>{this.props.pets.cat ? this.props.pets.cat.breed : null}</p>
            <p>{this.props.pets.cat ? this.props.pets.cat.gender : null}</p>
            <p>{this.props.pets.cat ? this.props.pets.cat.description : null}</p>
            <p>{this.props.pets.cat ? this.props.pets.cat.story : null}</p>

          </div>
        </div>
        <div className='queue'>{peopleMap}</div>
      </div>
    );
  }
}
