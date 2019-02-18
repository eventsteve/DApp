import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button} from 'react-bootstrap';

import ListDoc from '../components/ListDocument';
// import ModalAddDoc from '../components/AddDocument';

class DocContainer extends Component {
  render() {
    return (
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Header as="h5">List Document</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <ListDoc />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocContainer);