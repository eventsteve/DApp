import React, { Component } from 'react';
import { Modal, Button, Table, ListGroup } from 'react-bootstrap';
import UploadFile from 'components/form/UploadFile';
import { mineNewBlock } from 'utils/helper/callBlockchain';

class ModalUpload extends Component {

  constructor(props) {
    super(props)
    this.state = {
      documentInfo: null,
      blockMined: null
    }
  }

  getInfoFile(infoFileUploaded) {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.DocumentManager;
    const owner = drizzleState.accounts[0];
    mineNewBlock(infoFileUploaded, contract, owner)
      .then(blocMined => {
        blocMined.dataInfo.linkIpfs = infoFileUploaded.ipfs
        this.setState({
          documentInfo: blocMined.dataInfo,
          blockMined: blocMined.blockInfo
        })
        this.props.addNewDocuments(blocMined.dataInfo);
      }).catch(console.log);
  }

  renderFileInfo(document) {
    return (
      <ListGroup>
        <ListGroup.Item>Num Doc: {document.numDoc}</ListGroup.Item>
        <ListGroup.Item>Name: {document.name}</ListGroup.Item>
        <ListGroup.Item>Hash content: {document.contentHash}</ListGroup.Item>
        <ListGroup.Item>Link ipfs: {document.linkIpfs}</ListGroup.Item>
        <ListGroup.Item>Link ipfs crypt: {document.linkIpfsCrypt}</ListGroup.Item>
        <ListGroup.Item>Owner: {document.owner}</ListGroup.Item>
      </ListGroup>
    )
  }

  renderBlockInfo (block){
    return (
      <ListGroup>
        <ListGroup.Item>Block number: {block.blockNumber}</ListGroup.Item>
        <ListGroup.Item>Block hash: {block.blockHash}</ListGroup.Item>
        <ListGroup.Item>Gas used: {block.gasUsed}</ListGroup.Item>
        <ListGroup.Item>Status: {block.status ? 'Success' : 'Fail'}</ListGroup.Item>
        <ListGroup.Item>Transaction hash: {block.transactionHash}</ListGroup.Item>
      </ListGroup>
    )
  }

  render() {
    const { documentInfo, blockMined } = this.state
    return (
      <Modal
        size="lg"
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
          { documentInfo ? this.renderFileInfo(documentInfo) : null }
          { blockMined ? this.renderBlockInfo(blockMined) : null }
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