import React, { Component } from 'react';
import { initContract } from './common/helper/smartcontract';
import UploadFile from './components/UploadFile.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false
    }
  }

  componentDidMount() {
    initContract(window);
  }

  render() {
    return (
      <div>
        <h2>Is connected?:</h2><br/>
        {this.state.isConnected?'Connected to local node':'Not Connected'}
        <UploadFile />
      </div>
    );
  }
}

export default App;