import React from 'react';
import { saveToIpfs } from 'utils/helper/ipfs';

class UploadFile extends React.Component {
  constructor () {
    super()
    this.handleselectedFile = this.handleselectedFile.bind(this);
  }

  async handleselectedFile(event) {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0];
    let reader = new window.FileReader()
    reader.onload = async () => {
      const result = await saveToIpfs(reader);
      result['name'] = file.name;
      this.props.getInfo(result);
      this.setState({added_file_hash: result.path})
    }
    reader.readAsDataURL(file);
  }

  render () {
    return (
      <div>
        <input type="file" onChange={this.handleselectedFile} />
      </div>
    )
  }
}
export default UploadFile;