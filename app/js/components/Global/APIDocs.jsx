import React, { Component } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

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

          <SyntaxHighlighter language='bash' style={ docco }>{
            'curl -H "Content-Type: application/json" -X POST -d ' + JSON.stringify(loginExample) + ' "http://jsonify.me/register"'
          }</SyntaxHighlighter>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                  <SyntaxHighlighter language='javascript' style={ docco }>{
                    JSON.stringify(loginSuccess)
                  }</SyntaxHighlighter>
                </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                  <SyntaxHighlighter language='javascript' style={ docco }>{
                    JSON.stringify(loginFailure)
                  }</SyntaxHighlighter>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Authentication</h4>

          <SyntaxHighlighter language='bash' style={ docco }>{
            'curl -H "Content-Type: application/json" -X POST -d ' + JSON.stringify(authExample) + ' "http://jsonify.me/auth"'
          }</SyntaxHighlighter>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                    <SyntaxHighlighter language='javascript' style={ docco }>{
                      JSON.stringify(authSuccess)
                    }</SyntaxHighlighter>
                  </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                    <SyntaxHighlighter language='javascript' style={ docco }>{
                      JSON.stringify(authFailure)
                      }</SyntaxHighlighter>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Setting your subdomain</h4>

          <SyntaxHighlighter language='bash' style={ docco }>{
            'curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call"  -X POST -d ' + JSON.stringify(domainSetExample) + ' "http://jsonify.me/update"'
          }</SyntaxHighlighter>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                    <SyntaxHighlighter language='javascript' style={ docco }>{
                      JSON.stringify(domainSetSuccess)
                    }</SyntaxHighlighter>
                  </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                    <SyntaxHighlighter language='javascript' style={ docco }>{
                      JSON.stringify(domainSetFailure)
                    }</SyntaxHighlighter>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Setting your info</h4>

          <SyntaxHighlighter language='bash' style={ docco }>{
            'curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call" -X POST -d "json_object" "http://your-sub-domain/"'
          }</SyntaxHighlighter>

          <SyntaxHighlighter language='javascript' style={ docco }>{
            'curl -H "Content-Type: application/json" -H "Authorization: Bearer token-from-auth-call" -X POST -d "json_object" "http://username.jsonify.me/"'
          }</SyntaxHighlighter>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                    <SyntaxHighlighter language='javascript' style={ docco }>{
                      JSON.stringify(infoSetSuccess)
                    }</SyntaxHighlighter>
                  </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                    <SyntaxHighlighter language='javascript' style={ docco }>{
                      JSON.stringify(infoSetFailure)
                    }</SyntaxHighlighter>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Getting your info</h4>

          <SyntaxHighlighter language='bash' style={ docco }>{
            'curl -L -H "Content-Type: application/json" -X GET "http://your-sub-domain"'
          }</SyntaxHighlighter>

          <SyntaxHighlighter language='bash' style={ docco }>{
            'curl -L -H "Content-Type: application/json" -X GET "http://username.jsonify.me/"'
          }</SyntaxHighlighter>

          <table className='table'>
            <tbody>
              <tr>
                <td>Successful response</td>
                <td>
                  <SyntaxHighlighter language='javascript' style={ docco }>{
                    'data from the POST call of "setting your info"'
                  }</SyntaxHighlighter>
                </td>
              </tr>
              <tr>
                <td>Unsuccessful response</td>
                <td>
                  <SyntaxHighlighter language='javascript' style={ docco }>{
                    JSON.stringify(infoSetFailure)
                  }</SyntaxHighlighter>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
