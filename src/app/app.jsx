import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from 'components/ui/NavBar';
import {Container, Row, Col} from 'react-bootstrap';
import CheckWeb3 from 'utils/helper/checkWeb3';
import 'css/main.css';
import loadingIcon from 'images/loading.svg';

import { HomeContainer } from './home';
import { DocContainer } from './document';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      drizzleState: null
    };
  }

  componentWillMount() {
    const { drizzle } = this.props;
    this.unsubscribe = drizzle.store.subscribe(() => {
      const drizzleState = drizzle.store.getState();
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <CheckWeb3>
        <Router>
          <>
            <NavBar />
            {(this.state.loading) ?
              (<div className="text-center">
                <img src={loadingIcon}/>
                <p> Connecting to Ethereum Virtual Machine... </p>
              </div>)
              : (<Container>
                <Row>
                  <Col md={12}>
                    <Switch>
                      <Route exact path='/' component={(routeProps) =>
                        <HomeContainer
                          {...routeProps}
                          drizzle={this.props.drizzle}
                          drizzleState={this.state.drizzleState}
                        />
                      }/>
                      <Route path='/docs' component={(routeProps) =>
                        <DocContainer
                          {...routeProps}
                          drizzle={this.props.drizzle}
                          drizzleState={this.state.drizzleState}
                        />
                      }/>
                      <Route component={() => (<p>Not Found</p>)} />
                    </Switch>
                  </Col>
                </Row>
              </Container>)
            }
          </>
        </Router>
      </CheckWeb3>
    );
  }
}

export default App;