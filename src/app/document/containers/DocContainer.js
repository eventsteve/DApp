import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ListDoc from '../components/ListDocument';
// import ModalAddDoc from '../components/AddDocument';

import { fetchDocuments } from '../reducer';

class DocContainer extends Component {

  constructor(props, context) {
    super(props)
    this.state = { loading: true, drizzleState: null };
  }

  componentWillMount() {
    this.props.fetchDocuments();
  }

  componentDidMount() {
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

  getAcc(drizzle) {
    console.log(drizzle.accounts[0]);
    
    
  }

  render() {
    const { documents} = this.props
    if (this.state.loading) return "Loading Drizzle...";
    return (
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Header as="h5">List Document</Card.Header>
            <Card.Body>
              <button onClick={() => this.getAcc(this.state.drizzleState)}>getacc</button>
              <Card.Title>List file uploaded</Card.Title>

              <ListDoc documents={documents}/>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const { documents } = state.doc;
  return {
    documents
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDocuments: () => dispatch(fetchDocuments()),
  }
};

DocContainer.contextTypes = {
  drizzle: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocContainer);