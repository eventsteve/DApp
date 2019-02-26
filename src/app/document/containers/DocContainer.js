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
      isShowUpload: false
    };
  }

  componentWillMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.DocumentManager;
    const web3 = drizzle.web3;
    const ContractWeb3 = new web3.eth.Contract(contract.abi, contract.address);
    // this.props.fetchDocuments(ContractWeb3);
  }

  render() {
    const { documents } = this.props
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