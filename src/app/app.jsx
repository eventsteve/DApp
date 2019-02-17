import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { HomeContainer } from './home';
import { DocContainer } from './document';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/doc">Netflix</Link>
          </li>
        </ul>
          <Route exact path='/' component={HomeContainer}/>
          <Route path='/doc' component={DocContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;