import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import OAuthTest from './views/OAuthTest';

import Footer from './components/Footer';

require('../css/style.scss');

ReactDOM.render(
  <div className='main'>
    <div>
      <header>
        <h1>jsonify.me</h1>
      </header>
    </div>

    <Router>
      <div>
        <Route exact path='/' component={ Home } />
        <Route path='/oauth-test' component={ OAuthTest } />
        <Route path='/about' component={ About } />

        <hr />

        <ul className='nav'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/oauth-test'>OAuthTest</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </Router>
    <Footer />
  </div>,
  document.getElementById('app'),
);
