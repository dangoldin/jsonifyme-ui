import React, { Component } from 'react';

const axios = require('axios');

export default class UpdateSubdomain extends Component {
  constructor(props) {
    super(props);

    this.updateSubdomain = this.updateSubdomain.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updateSubdomain() {
    axios({
      url: JSONIFY_URL + '/update',
      method: 'post',
      data: {
        username: this.props.username,
        subdomain: this.props.subdomain,
      },
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
      json: true,
    }).then((response) => {
    }).catch((error) => {
      this.props.setError(error);
    });
  }

  render() {
    return (
      <form onSubmit={ this.updateSubdomain }>
        <input
          type='text'
          id='id_subdomain'
          placeholder='subdomain'
          name='subdomain'
          onChange={ this.handleChange }
        />
        <button type='submit'>Update subdomain</button>
      </form>
    );
  }
}
