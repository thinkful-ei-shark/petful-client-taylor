import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Adoption extends Component {
  render() {
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
            <img alt='this is a dog' src='https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            <div className='content'>
              <h4> Zim </h4>
              <p> 3yo </p>
              <p> Male </p>
              <h4> Story: </h4>
              <p> Owner passed away. </p>
            </div>
            <button> Adopt! </button>
          </div>
        </div>
        <div className='queue'>
          <p> Randy Lahey </p>
        </div>
      </div>
    );
  }
}
