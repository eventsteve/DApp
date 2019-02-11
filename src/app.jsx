import React, { Component } from 'react';
import Web3 from 'web3';
import {abi, address} from './common/web3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false
    }
  }

  componentWillMount(){
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
        window.ethereum.enable().then( () => {
          web3.eth.net.isListening().then(this.setState({isConnected: true}))
          .catch(e => console.log('Wow. Something went wrong'));
          const myContract = new web3.eth.Contract(abi, address);

          // Execute adopt as a transaction by sending account
          myContract.deployed().then((instance) => {
            adoptionInstance = instance;
            return adoptionInstance.ping.call();
          }).then(function(data) {
            console.log(data);
          }).catch(function(err) {
            console.log(err.message);
          });
        });

    } else {
       alert('You have to install MetaMask !');
    }
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