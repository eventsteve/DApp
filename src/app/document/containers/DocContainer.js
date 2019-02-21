import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ListDoc from '../components/ListDocument';
import ModalUpload from '../components/ModalUpload';
import { fetchDocuments, addNewDocuments } from '../reducer';

class DocContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowUpload: false,
      loading: true,
      drizzleState: null
    };
  }

  componentDidMount() {
    this.props.fetchDocuments();
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
    const { documents } = this.props
    if (this.state.loading) return <div className="text-center">Connect Drizzle to Ethereum Virtual Machine ...</div>;
    return (
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Header as="h5">List Document</Card.Header>
            <Card.Body>
              <Card.Title>List file uploaded</Card.Title>

              <Button
                  variant="primary"
                  onClick={() => this.setState({isShowUpload: true})}
              >
                Upload new file
              </Button>

              <ListDoc
                documents={documents}
                drizzle={this.props.drizzle}
                drizzleState={this.state.drizzleState}
              />

              <ModalUpload
                isShowUpload={this.state.isShowUpload}
                handleHide={() => this.setState({isShowUpload: false})}
                addNewDocuments={this.props.addNewDocuments}
                drizzle={this.props.drizzle}
                drizzleState={this.state.drizzleState}
              />
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
    addNewDocuments: (params) => dispatch(addNewDocuments(params)),
  }
};

DocContainer.contextTypes = {
  drizzle: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DocContainer);