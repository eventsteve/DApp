import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from 'components/ui/NavBar';
import {Container, Row, Col} from 'react-bootstrap';
import CheckWeb3 from 'utils/helper/checkWeb3';
import 'css/main.css';

import { HomeContainer } from './home';
import { DocContainer } from './document';

class App extends Component {
  render() {

    return (
      <CheckWeb3>
        <Router>
          <>
          <NavBar />
          <Container>
            <Row>
                <Col md={12}>
                  <Route exact path='/' component={HomeContainer}/>
                  <Route path='/docs' render={(routeProps) => (
                      <DocContainer {...routeProps} {...this.props} />
                    )}/>
                </Col>
            </Row>
          </Container>
          </>
        </Router>
      </CheckWeb3>
    );
  }
}

export default App;