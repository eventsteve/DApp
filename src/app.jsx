import React, { Component } from 'react';
import Web3 from 'web3';
import fs from 'fs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null
    }
  }

  componentWillMount(){
    fs.readFile('../build/contracts/DocumentManager.json', function(err, data) {
      console.log(data);
    });
    // const abcd = JSON.parse(readFileSync('../build/contracts/DocumentManager.json', 'utf8'));
    
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try { 
         window.ethereum.enable().then(function() {
          //  const abi = JSON.stringify(contract.abi);
          //   const address = JSON.stringify(contract.abi);
          //  const contractManager = new web3.eth.Contract(abi, address);
         });
      } catch(e) {
         // User has denied account access to DApp...
      }
   }
   else {
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