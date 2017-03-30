import React, { Component } from 'react';

export default class APIDocs extends Component {
  render() {
    return (
      <div>
        <h3>The API</h3>

        <p>This API is still a work in progress so expect to see changes, hopefully non-breaking unless they're necessary. The underlying data shouldn't be affected though.</p>

        <hr/>

        <div>
            <h4>Registration</h4>

            <pre><code class="bash">curl -H "Content-Type: application/json" -X POST -d '{"username": "your-username", "email" : "your-email", "password" : "your-password"}' "http://jsonify.me/register"</code></pre>

            <table class="table">
            <tbody>
                <tr>
                <td>Successful response</td>
                <td>
                    <pre><code class="javascript">{'success' : true, 'message': 'Successfully registered'}</code></pre>
                </td>
                </tr>
                <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code class="javascript">{'success': false, 'message': 'Error message'}</code></pre>
                </td>
                </tr>
            </tbody>
            </table>
        </div>

        <div>
            <h4>Authentication</h4>

            <pre><code class="bash">curl -H "Content-Type: application/json" -X POST -d '{"username": "your-username", "email" : "your-email", "password" : "your-password"}' "http://jsonify.me/auth"</code></pre>

            <table class="table">
            <tbody>
                <tr>
                <td>Successful response</td>
                <td>
                    <pre><code class="javascript">{'success': true, 'token': 'Your secret token', 'message' : 'Successfully authenticated'}</code></pre>
                </td>
                </tr>
                <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code class="javascript">{'success': false, 'message': 'Not able to login'}</code></pre>
                </td>
                </tr>
            </tbody>
            </table>
        </div>

        <div>
            <h4>Setting your subdomain</h4>

            <pre><code class="bash">curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call"  -X POST -d '{"username": "your-username", "subdomain" : "sub-domain-you-want-to-use" }' "http://jsonify.me/update"</code></pre>

            <table class="table">
            <tbody>
                <tr>
                <td>Successful response</td>
                <td>
                    <pre><code class="javascript">{'success': true, 'message': 'Account info has been updated'}</code></pre>
                </td>
                </tr>
                <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code class="javascript">{'success': false, 'message': 'Error message'}</code></pre>
                </td>
                </tr>
            </tbody>
            </table>
        </div>

        <div>
            <h4>Setting your info</h4>

            <pre><code class="bash">curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call" -X POST -d 'json_object' "http://your-sub-domain/"</code></pre>

            <pre><code class="bash">curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call" -X POST -d 'json_object' "http://username.jsonify.me/"</code></pre>

            <table class="table">
            <tbody>
                <tr>
                <td>Successful response</td>
                <td>
                    <pre><code class="javascript">{'success': true, 'message' : 'Data updated'}</code></pre>
                </td>
                </tr>
                <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code class="javascript">{'success': false, 'message': 'Error message'}</code></pre>
                </td>
                </tr>
            </tbody>
            </table>
        </div>

        <div>
            <h4>Getting your info</h4>

            <pre><code class="bash">curl -L -H "Content-Type: application/json" -X GET "http://your-sub-domain"</code></pre>

            <pre><code class="bash">curl -L -H "Content-Type: application/json" -X GET "http://username.jsonify.me/"</code></pre>

            <table class="table">
            <tbody>
                <tr>
                <td>Successful response</td>
                <td>
                    <pre><code class="javascript">{data from the POST call of "setting your info"}</code></pre>
                </td>
                </tr>
                <tr>
                <td>Unsuccessful response</td>
                <td>
                    <pre><code class="javascript">{'success': false, 'message': 'Error message'}</code></pre>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    );
  }
}
