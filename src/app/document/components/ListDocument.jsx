import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import ModalUpload from './ModalUpload';

export default class ListDoc extends Component {
  
  constructor(props) {
    super()
    this.state = {
      isShowUpload: false
    }
  }

  render () {
    return (
      <>
        <Button
          variant="primary"
          onClick={() => this.setState({isShowUpload: true})}
        >
          Upload new file
        </Button>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <ModalUpload
          isShowUpload={this.state.isShowUpload}
          handleHide={() => this.setState({isShowUpload: false})}
        />
      </>
    )
  }
}