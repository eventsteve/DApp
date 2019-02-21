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
                <th>#</th>
                <th>Name</th>
                <th>Hash Doc</th>
                <th>Hash Link Ipfs</th>
                <th>Owner</th>
                <th>Upload at</th>
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