import React, { Component } from 'react';

export default class OAuthTest extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin(e) {
    e.preventDefault();

    // Make request to authenticate and get token
  }

  handleChange(e) {
    const field = e.target.name;
    const state = this.state;
    state[field] = e.target.value;

    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>OAuth Test</h1>

        <div className='section'>
            This will create a jsonify.me profile for you based on your LinkedIn or Twitter profile.
        </div>

        <hr />

        <div className='section'>
            Login to jsonify.me first. Note that you will need to register via the API.
            Check out the docs on the <a href='/'>home page</a> to get started.

            <form onSubmit={ this.handleLogin }>
              <div>
                <input
                  type='text'
                  id='id_username'
                  placeholder='username'
                  name='username'
                  onChange={ this.handleChange }
                />
                <input
                  type='password'
                  id='id_password'
                  placeholder='password'
                  name='password'
                  onChange={ this.handleChange }
                />
              </div>
              <button type='submit'>Login</button>
            </form>
        </div>
      </div>
    );
  }
}
