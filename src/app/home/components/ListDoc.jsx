import React, { Component } from 'react';
import {Card, Table} from 'react-bootstrap';

export default class ListDoc extends Component {
  render() {
    return (
      <Card>
        <Card.Header as="h5">List Document</Card.Header>
        <Card.Body>
          <Card.Title>List file uploaed</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{width: '5%'}}>#</th>
                <th>Name</th>
                <th>Hash content</th>
                <th>Link crypt</th>
                <th>Owner</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
                {this.props.documents.map((doc, index) => {
                  const dateUploaded = new Date(doc.created_at);
                  return (
                    <tr key={index}>
                      <td>{doc.num_doc}</td>
                      <td>{doc.name}</td>
                      <td>{doc.hash_content}</td>
                      <td>{doc.link_ipfs_crypt}</td>
                      <td>{doc.owner}</td>
                      <td>{dateUploaded.toDateString()}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}