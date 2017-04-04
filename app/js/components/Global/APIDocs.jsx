import React, { Component } from 'react';

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

        <div>
          <h4>Registration</h4>

          <pre><code className='bash'>curl -H "Content-Type: application/json" -X POST -d &#39;{ JSON.stringify(loginExample) }&#39; "http://jsonify.me/register"</code></pre>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                    <pre><code className='javascript'>{ JSON.stringify(loginSuccess) }</code></pre>
                </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code className='javascript'>{ JSON.stringify(loginFailure) }</code></pre>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Authentication</h4>

          <pre><code className='bash'>curl -H "Content-Type: application/json" -X POST -d &#39;{ JSON.stringify(authExample) }&#39;' "http://jsonify.me/auth"</code></pre>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                    <pre><code className='javascript'>{ JSON.stringify(authSuccess) }</code></pre>
                  </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code className='javascript'>{ JSON.stringify(authFailure) }</code></pre>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Setting your subdomain</h4>

          <pre><code className='bash'>curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call"  -X POST -d '{ JSON.stringify(domainSetExample) }' "http://jsonify.me/update"</code></pre>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                    <pre><code className='javascript'>{ JSON.stringify(domainSetSuccess) }</code></pre>
                  </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code className='javascript'>{ JSON.stringify(domainSetFailure) }</code></pre>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Setting your info</h4>

          <pre><code className='bash'>curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call" -X POST -d 'json_object' "http://your-sub-domain/"</code></pre>

          <pre><code className='bash'>curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call" -X POST -d 'json_object' "http://username.jsonify.me/"</code></pre>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                    <pre><code className='javascript'>{ JSON.stringify(infoSetSuccess) }</code></pre>
                  </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code className='javascript'>{ JSON.stringify(infoSetFailure) }</code></pre>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Getting your info</h4>

          <pre><code className='bash'>curl -L -H "Content-Type: application/json" -X GET "http://your-sub-domain"</code></pre>

          <pre><code className='bash'>curl -L -H "Content-Type: application/json" -X GET "http://username.jsonify.me/"</code></pre>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                    <pre><code className='javascript'>&#123;data from the POST call of "setting your info"&#125;</code></pre>
                  </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code className='javascript'>&#123;&#39;success&#39;: false, &#39;message&#39;: &#39;Error message&#39;&#125;</code></pre>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
