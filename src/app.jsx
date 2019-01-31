import React, { Component } from 'react';
import Web3 from 'web3';
import TruffleContract from 'truffle-contract'
import {fetchAccounts} from './common/web3'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isConnected: false};
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
  }
  componentDidMount() {
    fetchAccounts();
  }
  render() {
    return (
      <div>
        <h2>Is connected?:</h2><br/>
        {this.state.isConnected?'Connected to local node':'Not Connected'}
      </div>
    );
  }
}

export default App;