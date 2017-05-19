import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import browserHistory from 'react-router';

import Home from './views/Home';
import OAuthTest from './views/OAuthTest';

import Footer from './components/Footer';

require('../css/style.scss');

ReactDOM.render(
  <div className='holder'>
    <div className='main'>
      <div>
        <header>
          <h1>jsonify.me</h1>
        </header>
      </div>

      <Router history={ browserHistory }>
        <div>
          <Route exact path='/' component={ Home } />
          <Route path='/oauth-test' component={ OAuthTest } />

          <ul className='nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/oauth-test'>OAuthTest</Link></li>
          </ul>
        </div>
      </Router>
    </div>
    <Footer />
  </div>,
  document.getElementById('app'),
);
