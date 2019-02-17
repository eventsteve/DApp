import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NavBar from 'components/ui/NavBar';
import {Container, Row, Col} from 'react-bootstrap';

import { HomeContainer } from './home';
import { DocContainer } from './document';

class App extends Component {
  render() {
    return (
      <Router>
        <>
        <NavBar />
        <Container>
          <Row>
              <Col md={12}>
                <Route exact path='/' component={HomeContainer}/>
                <Route path='/docs' component={DocContainer}/>
              </Col>
          </Row>
        </Container>
        </>
      </Router>
    );
  }
}

export default App;