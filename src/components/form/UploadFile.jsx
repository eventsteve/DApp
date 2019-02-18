import React from 'react';
import { saveToIpfs, getFromIpfs } from 'utils/helper/ipfs';

class UploadFile extends React.Component {
  constructor () {
    super()
    this.state = {
      added_file_hash: null
    }

    this.handleselectedFile = this.handleselectedFile.bind(this);
    this.getfile = this.getfile.bind(this);
  }

  async handleselectedFile(event) {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0];
    let reader = new window.FileReader()
    reader.onload = async () => {
      const result = await saveToIpfs(reader);
      this.props.getInfo(result);
      this.setState({added_file_hash: result.path})
    }
    reader.readAsDataURL(file);
  }

  getfile() {
    getFromIpfs(this.state.added_file_hash)
  }

  render () {
    return (
      <div>
        <input type="file" onChange={this.handleselectedFile} />
        <div>
          <a target="_blank"
            href={'https://ipfs.io/ipfs/' + this.state.added_file_hash}>
            {this.state.added_file_hash}
          </a>
        </div>

        <button onClick={this.getfile}>Get file</button>
      </div>
    )
  }
}
export default UploadFile;