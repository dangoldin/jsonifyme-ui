import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
    </div>
  </Router>,
  document.getElementById('app'),
);
