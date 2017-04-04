import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import OAuthTest from './views/OAuthTest';

import Footer from './components/Footer';

ReactDOM.render(
  <div>
    <h1>jsonify.me</h1>

    <hr />

    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/oauth-test'>OAuthTest</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        <hr />

        <Route exact path='/' component={ Home } />
        <Route path='/oauth-test' component={ OAuthTest } />
        <Route path='/about' component={ About } />
      </div>
    </Router>
    <Footer />
  </div>,
  document.getElementById('app'),
);
