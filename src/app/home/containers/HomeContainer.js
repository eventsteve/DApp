import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col} from 'react-bootstrap';

import ListMem from '../components/ListMem';
import ListDoc from '../components/ListDoc';

class HomeContainer extends Component {
  render() {
    return (
      <Row className="mt-4">
        <Col md={6}>
          <ListMem />
        </Col>
        <Col md={6}>
          <ListDoc />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const { currentCount } = state.home;
  return {
    currentCount
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);