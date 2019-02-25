import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ListDoc from '../components/ListDocument';
import ModalUpload from '../components/ModalUpload';
import { fetchDocuments, addNewDocuments } from '../reducer';
import loading from 'images/loading.svg';

class DocContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowUpload: false,
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
    console.log('sdfsdf');
    
    this.unsubscribe();

  }

  render() {
    const { documents } = this.props
    if (this.state.loading) return (
      <div className="text-center">
        <img src={loading}/>
        <p> Connecting to Ethereum Virtual Machine... </p>
      </div>
    )
    return (
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Header as="h5">
            List Document
                <Button
                  onClick={() => this.setState({isShowUpload: true})}
                  bsPrefix="btn btn-primary float-right"
                >
                  Upload file
                </Button>
            </Card.Header>
            <Card.Body>
              <ListDoc
                documents={documents}
                drizzle={this.props.drizzle}
                drizzleState={this.state.drizzleState}
                fetchDocuments={this.props.fetchDocuments}
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
    fetchDocuments: (params) => dispatch(fetchDocuments(params)),
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