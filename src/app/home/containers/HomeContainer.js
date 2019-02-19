import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col} from 'react-bootstrap';

import ListMem from '../components/ListMem';
import ListDoc from '../components/ListDoc';

import { fetchMembers, fetchDocuments } from '../reducer';
class HomeContainer extends Component {

  componentWillMount() {
    this.props.fetchMembers();
    this.props.fetchDocuments();
  }

  render() {
    const { members, documents } = this.props
    
    return (
      <Row className="mt-4">
        <Col md={8}>
          <ListDoc documents={documents} />
        </Col>
        <Col md={4}>
          <ListMem members={members} />
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
    fetchMembers: () => dispatch(fetchMembers()),
    fetchDocuments: () => dispatch(fetchDocuments()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);