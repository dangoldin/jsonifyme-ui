import React, { Component } from 'react';

export default class Authentication extends Component {
  render() {
    return (
      <form onSubmit={ this.props.handleLogin }>
        <div>
          <input
            type='text'
            id='id_username'
            placeholder='username'
            name='username'
            value={ this.props.username }
            onChange={ this.props.handleChange }
          />
          <input
            type='password'
            id='id_password'
            placeholder='password'
            name='password'
            value={ this.props.password }
            onChange={ this.props.handleChange }
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    );
  }

}
