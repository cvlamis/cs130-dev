import React, { Component } from 'react';
import FilteredTable from './FilteredTable'
import logo from './resources/logo.svg';
import './Collecti.css';

class Collecti extends Component {
  render() {
    return (
      <div className='Collecti'>
        <div className='Collecti-header'>
          <img src={logo} className='Collecti-logo' alt='logo' />
          <h2>Your Game Collection</h2>
        </div>
        <p className='YGL-intro'>
          Welcome to Collecti! Below are the games you've added to your collection. Filter on them on any of the following criteria.
        </p>
        <FilteredTable collectables={this.props.collectables}/>
        <div className='Collecti-footer'>
          <p>
            Created using the Facebook Create React App template, <a href="https://github.com/facebookincubator/create-react-app">https://github.com/facebookincubator/create-react-app</a>, and by following Facebook's guide, <a href="https://facebook.github.io/react/docs/thinking-in-react.html">"Thinking in React"</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Collecti;
