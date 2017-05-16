import React, { Component } from 'react';

import APIDocRequest from './APIDocRequest';

export default class APIDocs extends Component {
  render() {
    const loginExample = { username: 'your-username', email: 'your-email', password: 'your-password' };
    const loginSuccess = { success: true, message: 'Successfully registered' };
    const loginFailure = { success: false, message: 'Error message' };

    const authExample = { username: 'your-username', email: 'your-email', password: 'your-password' };
    const authSuccess = { success: true, token: 'Your secret token', message: 'Successfully authenticated' };
    const authFailure = { success: false, message: 'Not able to login' };

    const domainSetExample = { username: 'your-username', subdomain: 'sub-domain-you-want-to-use' };
    const domainSetSuccess = { success: true, message: 'Account info has been updated' };
    const domainSetFailure = { success: false, message: 'Error message' };

    const infoSetSuccess = { success: true, message: 'Data updated' };
    const infoSetFailure = { success: false, message: 'Error message' };

    return (
      <div>
        <h3>The API</h3>

        <p>This API is still a work in progress so expect to see changes, hopefully non-breaking unless they&#39;re necessary. The underlying data shouldn&#39;t be affected though.</p>

        <hr />

        <APIDocRequest
          title='Registration'
          curlRequest={ 'curl -H "Content-Type: application/json" -X POST -d ' + JSON.stringify(loginExample) + ' "http://jsonify.me/register"' }
          successResponse={ JSON.stringify(loginSuccess) }
          failureResponse={ JSON.stringify(loginFailure) }
        />

        <APIDocRequest
          title='Authentication'
          curlRequest={ 'curl -H "Content-Type: application/json" -X POST -d ' + JSON.stringify(authExample) + ' "http://jsonify.me/auth"' }
          successResponse={ JSON.stringify(authSuccess) }
          failureResponse={ JSON.stringify(authFailure) }
        />

        <APIDocRequest
          title='Setting your subdomain'
          curlRequest={ 'curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call"  -X POST -d ' + JSON.stringify(domainSetExample) + ' "http://jsonify.me/update"' }
          successResponse={ JSON.stringify(domainSetSuccess) }
          failureResponse={ JSON.stringify(domainSetFailure) }
        />

        <APIDocRequest
          title='Setting your info'
          curlRequest={ 'curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call" -X POST -d "json_object" "http://your-sub-domain/"| "http://username.jsonify.me/"' }
          successResponse={ JSON.stringify(infoSetSuccess) }
          failureResponse={ JSON.stringify(infoSetFailure) }
        />

        <APIDocRequest
          title='Getting your info'
          curlRequest={ 'curl -L -H "Content-Type: application/json" -X GET "http://your-sub-domain"|"http://username.jsonify.me/"' }
          successResponse={ 'data from the POST call of "setting your info"' }
          failureResponse={ JSON.stringify(infoSetFailure) }
        />
      </div>
    );
  }
}
