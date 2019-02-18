import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UploadFile from 'components/form/UploadFile';

class ModalUpload extends Component {

  constructor(props) {
    super()
    this.state = {
      fileInfo: {}
    }
  }

  getInfoFile(data) {
    this.setState({fileInfo: data})
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.props.handleHide()}
          >
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalUpload;