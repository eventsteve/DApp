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

  renderTableDoc(documents) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Hash Doc</th>
            <th>Hash Link Ipfs</th>
            <th>Owner</th>
            <th>Upload at</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => {
            const dateUploaded = new Date(doc.created_at);
            return (
              <tr key={index}>
                <td>{doc.num_doc}</td>
                <td>{doc.name}</td>
                <td>{doc.hash}</td>
                <td>{doc.link_ipfs}</td>
                <td>{doc.owner}</td>
                <td>{dateUploaded.toDateString()}</td>
                <td>
                  <Button variant="primary">Detail</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

  render () {
    const { documents } = this.props
    return (
      <>
        <Button
          variant="primary"
          onClick={() => this.setState({isShowUpload: true})}
        >
          Upload new file
        </Button>
        {this.renderTableDoc(documents)}
        <ModalUpload
          isShowUpload={this.state.isShowUpload}
          handleHide={() => this.setState({isShowUpload: false})}
        />
      </>
    )
  }
}