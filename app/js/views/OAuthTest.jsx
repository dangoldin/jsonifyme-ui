import React, { Component } from 'react';

import Error from '../components/Global/Error';
import UpdateSubdomain from '../components/UpdateSubdomain';
import Authentication from '../components/Authentication';

const axios = require('axios');

export default class OAuthTest extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setError = this.setError.bind(this);

    this.state = {
      username: '',
      password: '',
      token: '',
      subdomain: '',
      error: '',
    };
  }

  setError(error) {
    this.setState({
      error: `${error}`,
    });
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
        that.setState({ token: response.token });
      }).catch((error) => {
        this.setState({
          error: `${error}`,
        });
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
        Authorization: `Bearer ${this.state.token}`,
        Referrer: `${this.state.username}.jsonify.me`,
      },
      json: true,
    }).then((response) => {
    }).catch((error) => {
      this.setState({
        error: `${error}`,
      });
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
        { this.state.error ? <Error error={ this.state.error } /> : '' }

        <div className='section'>
            This will create a jsonify.me profile for you based on your LinkedIn or Twitter profile.
        </div>

        <hr />

        <div className='section'>
          Login to jsonify.me first. Note that you will need to register via the API.
          Check out the docs on the <a href='/'>home page</a> to get started.

          <Authentication
            username={ this.state.username }
            password={ this.state.password }
            handleChange={ this.handleChange }
            handleLogin={ this.handleLogin }
            setError={ this.setError }
          />

          { this.state.token ?
            <UpdateSubdomain
              username={ this.state.username }
              subdomain={ this.state.subdomain }
              token={ this.state.token }
              setError={ this.setError }
            /> : '' }
        </div>
      </div>
    );
  }
}
