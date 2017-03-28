import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import App from './views/App';
import Home from './views/Home';
import About from './views/About';

ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={ App } />
      <Route path='/about' component={ About } />
    </div>
  </Router>,
  document.getElementById('app')
);
