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
      subdomain: '',
    };
  }

  handleLogin(e) {
    e.preventDefault();

    const that = this;

    // Make request to authenticate and get token
    // TODO: Actually use real URL from build process
    axios.post(JSONIFY_URL + '/auth',
      { username: this.state.username,
        password: this.state.password,
      }).then((response) => {
        console.log('Success');
        console.log(response);
        that.setState({ token: response.token });
        that.updateSubdomain();
      }).catch((error) => {
        console.log('Failure');
        console.log(error);
      });
  }

  updateSubdomain() {
    axios({
      url: JSONIFY_URL + '/update',
      method: 'post',
      data: {
        username: this.state.username,
        subdomain: this.state.subdomain,
      },
      headers: {
        'Authorization': 'Bearer ' + this.state.token,
      },
      json: true,
    }).then((response) => {
      console.log('Success');
      console.log(response);
    }).catch((error) => {
      console.log('Failure');
      console.log(error);
    });
  }

  updateInfo() {
    axios({
      url: JSONIFY_URL + '/update',
      method: 'post',
      data: {
        username: this.state.username,
        subdomain: this.state.subdomain,
      },
      headers: {
        'Authorization': 'Bearer ' + this.state.token,
        'Referrer': this.state.username + '.jsonify.me',
      },
      json: true,
    }).then((response) => {
      console.log('Success');
      console.log(response);
    }).catch((error) => {
      console.log('Failure');
      console.log(error);
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
                <input
                  type='text'
                  id='id_subdomain'
                  placeholder='subdomain'
                  name='subdomain'
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
