import React, { Component } from 'react';
import UploadFile from 'components/form/UploadFile';
import {Card, Button} from 'react-bootstrap';

export default class ListMem extends Component {
  render() {
    return (
      <Card>
        <Card.Header as="h5">List Member</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}