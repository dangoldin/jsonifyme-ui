import React, { Component } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

export default class APIDocRequest extends Component {
  render() {
    return (
      <div>
        <h4>{ this.props.title }</h4>

        <SyntaxHighlighter language='bash' style={ docco }>
          { this.props.curlRequest }
        </SyntaxHighlighter>

        <table className='table'>
          <tbody>
            <tr>
              <td>Successful response</td>
              <td>
                <SyntaxHighlighter language='javascript' style={ docco }>
                  { this.props.successResponse }
                </SyntaxHighlighter>
              </td>
            </tr>
            <tr>
              <td>Unsuccessful response</td>
              <td>
                <SyntaxHighlighter language='javascript' style={ docco }>
                  { this.props.failureResponse }
                </SyntaxHighlighter>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
