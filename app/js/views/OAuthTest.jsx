import React, { Component } from 'react';

const axios = require('axios');

export default class OAuthTest extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
      token: '',
    };
  }

  handleLogin(e) {
    e.preventDefault();

    const that = this;

    // Make request to authenticate and get token
    // TODO: Actually use real URL from build process
    axios.post('http://localhost:3000/auth',
      { username: this.state.username,
        password: this.state.password,
      }).then(function (response) {
        console.log('Success');
        console.log(response);
        that.setState({ token: response.token });
        that.updateInfo();
      }).catch(function (error) {
        console.log('Failure');
        console.log(error);
      });
  }

  updateInfo() {
    axios({
      url: 'http://localhost:3000/profile',
      method: 'post',
      data: { test: 'test' },
      headers: {
        'Authorization': 'Bearer ' + this.state.token,
      },
      json: true,
    }).then(function (response) {
      console.log('Success');
      console.log(response);
    }).catch(function (error) {
      console.log('Failure');
      console.log('error');
    });
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
