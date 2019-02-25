import React, { Component } from 'react';
import { Table, Button, Modal, ListGroup } from 'react-bootstrap';
import { getDocMinedByIndex, getAllBlock } from 'utils/helper/callBlockchain';
import { getFromIpfs, dataToFile } from 'utils/helper/ipfs';

export default class ListDoc extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isShowModalDownload: false,
      docSelecting: null,
    }
    this.handleShowModalDownload = this.handleShowModalDownload.bind(this);
    this.renderModalDownload = this.renderModalDownload.bind(this);
    this.renderTableDoc = this.renderTableDoc.bind(this);
    this.handleDownload = this.handleDownload.bind(this);
  }

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.DocumentManager;
    const web3 = drizzle.web3;
    const ContractWeb3 = new web3.eth.Contract(contract.abi, contract.address);
    this.props.fetchDocuments(ContractWeb3)
  }

  getDocFromBlockchain(numDoc) {
    
    const { drizzle } = this.props;
    const contract = drizzle.contracts.DocumentManager;
    const result = getDocMinedByIndex(numDoc, contract);
    getAllBlock(contract);


    result.then(block => {
      this.setState({docSelecting: block})
      })
      .catch(console.log);
  }

  handleDownload() {
    const {linkIpfsCrypt, name} = this.state.docSelecting
    getFromIpfs(linkIpfsCrypt).then((data) => {
      dataToFile(data, name);
    });
  }

  handleShowModalDownload(doc) {
    this.getDocFromBlockchain(doc.num_doc);
    this.setState({
      isShowModalDownload: true
    })
  }

  renderDocDetail(document) {
    return (
      <ListGroup>
        <ListGroup.Item><b>Name: </b> {document.name}</ListGroup.Item>
        <ListGroup.Item><b>Hash content: </b> {document.contentHash}</ListGroup.Item>
        <ListGroup.Item><b>Link ipfs crypt:</b> {document.linkIpfsCrypt}</ListGroup.Item>
        <ListGroup.Item><b>Owner address: </b> {document.owner}</ListGroup.Item>
      </ListGroup>
    )
  }

  renderModalDownload() {
    const { docSelecting } = this.state
    return (
      <Modal
        show={this.state.isShowModalDownload}
        onHide={() => this.setState({isShowModalDownload: false})}
      >
        <Modal.Header closeButton>
          <Modal.Title>Download Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {docSelecting ? this.renderDocDetail(docSelecting): ''}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.setState({isShowModalDownload: false})}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => this.handleDownload()}
          >
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  renderTableDoc(documents) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{width: '5%'}}>#</th>
            <th>Name</th>
            <th>Hash Doc</th>
            <th>Hash Link Ipfs</th>
            <th>Owner</th>
            <th style={{width: '13%'}}>Upload at</th>
            <th style={{width: '11%'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => {
            const dateUploaded = new Date(doc.created_at);
            return (
              <tr key={index}>
                <td>{doc.num_doc}</td>
                <td>{doc.name}</td>
                <td>{doc.hash_content}</td>
                <td>{doc.link_ipfs_crypt}</td>
                <td>{doc.owner}</td>
                <td>{dateUploaded.toDateString()}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => this.handleShowModalDownload(doc)}
                  >
                    Download
                  </Button>
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
        {this.renderTableDoc(documents)}
        {this.renderModalDownload()}
      </>
    )
  }
}