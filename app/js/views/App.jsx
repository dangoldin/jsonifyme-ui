import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        { this.props.children }
      </div>
    );
  }
}
