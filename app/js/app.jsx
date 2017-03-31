import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import APIDocs from './views/APIDocs';

ReactDOM.render(
  <div>
    <h1>jsonify.me</h1>

    <p>jsonify.me allows anyone to generate a personal JSON object with whatever information they want to share about themselves. The UI is minimal and all functionality is exposed through a basic API described below. It's mimimal by design and meant to be the foundation fo whatever people want to do with it. I use it as a programmatic way to expose data about me on my own domain - <a href="http://json.dangoldin.com">json.dangoldin.com</a>.</p>

    <p>The structure is entirely freeform but it would be cool to see a somewhat reasonable structure evolve as more and more people use it. If you have any ideas or want to build an add on let me know (you can find my email in my jsonify.me).</p>

    <p><strong>Note:</strong> If you want to use a custom domain, you'll need to create a CNAME record pointing your subdomain to domains.jsonify.me in addition to setting the subdomain to your account. For example, I have a CNAME record for json.dangoldin.com pointing to domains.jsonify.me.</p>

    <hr />

    <APIDocs />

    <hr />

    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        <hr />

        {APIDocs}

        <hr />

        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
      </div>
    </Router>
  </div>,
  document.getElementById('app'),
);
