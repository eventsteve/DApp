import React, { Component } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import UploadFile from 'components/form/UploadFile';
import { mineNewBlock } from 'utils/helper/callBlockchain';

class ModalUpload extends Component {

  constructor(props) {
    super(props)
    this.state = {
      documentInfo: null
    }
  }

  getInfoFile(data) {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.DocumentManager;
    const owner = drizzleState.accounts[0];
    mineNewBlock(data, contract, owner).then(docMined => {
      this.setState({documentInfo: docMined})
    }).catch(console.log);
  }

  renderFileInfo(document) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hash Doc</th>
            <th>Hash Ipfs</th>
            <th>Size</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{document.num_document}</td>
            <td>{document.hashFile}</td>
            <td>{document.path}</td>
            <td>{document.size}</td>
            <td>{owner}</td>
          </tr>
        </tbody>
      </Table>
    )
  }

  render() {
    return (
      <Modal
        show={this.props.isShowUpload}
        onHide={() => this.props.handleHide()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload new file document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadFile
            getInfo={(data) => this.getInfoFile(data)}
          />
          {this.state.documentInfo ? this.renderFileInfo(this.state.documentInfo) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.props.handleHide()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalUpload;