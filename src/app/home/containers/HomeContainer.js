import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col} from 'react-bootstrap';

import ListMem from '../components/ListMem';
import ListDoc from '../components/ListDoc';

import { fetchDocuments } from '../reducer';
class HomeContainer extends Component {

  componentWillMount() {
    this.props.fetchDocuments();
  }

  render() {
    const { documents } = this.props
    
    return (
      <Row className="mt-4">
        <Col md={12}>
          <ListDoc documents={documents} />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  const { members, documents } = state.home;
  return {
    members,
    documents
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDocuments: () => dispatch(fetchDocuments()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);