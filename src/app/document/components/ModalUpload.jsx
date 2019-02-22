import React, { Component } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import UploadFile from 'components/form/UploadFile';
import { mineNewBlock } from 'utils/helper/callBlockchain';
import loadingIcon from 'images/loading.svg';

class ModalUpload extends Component {

  constructor(props) {
    super(props)
    this.state = {
      documentInfo: null,
      blockMined: null,
      loading: false
    }

    this.handleHideModal = this.handleHideModal.bind(this);
  }

  getInfoFile(infoFileUploaded) {
    this.setState({loading: true});
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.DocumentManager;
    const owner = drizzleState.accounts[0];
    mineNewBlock(infoFileUploaded, contract, owner)
      .then(blocMined => {
        blocMined.dataInfo.linkIpfs = infoFileUploaded.ipfs
        this.setState({
          documentInfo: blocMined.dataInfo,
          blockMined: blocMined.blockInfo,
          loading: false
        })
        this.props.addNewDocuments(blocMined.dataInfo);
      }).catch(console.log);
  }

  renderFileInfo(document, block) {
    return (
      <Table hover>
        <thead>
          <tr>
            <th style={{width: '21%'}}>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Doc number</td>
            <td>{document.numDoc}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{document.name}</td>
          </tr>
          <tr>
            <td>Hash content</td>
            <td>{document.contentHash}</td>
          </tr>
          <tr>
            <td>Link ipfs</td>
            <td>
              <a href={`https://ipfs.io/ipfs/${document.linkIpfs}`}>
                {document.linkIpfs}
              </a>
            </td>
          </tr>
          <tr>
            <td>Link crypt</td>
            <td>
              {document.linkIpfsCrypt}
            </td>
          </tr>
          <tr>
            <td>Owner adress</td>
            <td>{document.owner}</td>
          </tr>
          <tr>
            <td>Block status</td>
            <td>{block.status ? 'Success' : 'Fail'}</td>
          </tr>
          <tr>
            <td>Gas used</td>
            <td>{block.gasUsed} Gwei</td>
          </tr>
          <tr>
            <td>Block number</td>
            <td>{block.blockNumber}</td>
          </tr>
          <tr>
            <td>Block hash</td>
            <td>{block.blockHash}</td>
          </tr>
          <tr>
            <td>Transaction hash</td>
            <td>{block.transactionHash}</td>
          </tr>
        </tbody>
      </Table>
    )
  }

  handleHideModal() {
    this.setState({
      documentInfo: null,
      blockMined: null
    })
    this.props.handleHide();
  }
  render() {
    const { documentInfo, blockMined, loading } = this.state
    return (
      <Modal
        size="lg"
        show={this.props.isShowUpload}
        onHide={() => this.handleHideModal()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload new file document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UploadFile
            getInfo={(data) => this.getInfoFile(data)}
          />

          { loading ?  <div className="text-center">
            <img src={loadingIcon}/>
            <p>Mine Ethereum... </p>
          </div> : ''}

          { documentInfo && blockMined ? this.renderFileInfo(documentInfo, blockMined) : null }
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.handleHideModal()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalUpload;