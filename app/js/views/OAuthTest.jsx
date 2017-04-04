import React, { Component } from 'react';

export default class OAuthTest extends Component {
  render() {
    return (
      <div>
        <h1>OAuth Test</h1>

        <div>
            This will create a jsonify.me profile for you based on your LinkedIn or Twitter profile.
        </div>

        <hr />

        <div>
            <p>Login to jsonify.me first. Note that you will need to register via the API. Check out the docs on the <a href="/">home page</a> to get started.</p>

            <form>
                <div>
                    <label>Username</label>
                    <input type="text" id="id_username" placeholder="username" name="username" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="id_password" placeholder="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
      </div>
    );
  }
}
