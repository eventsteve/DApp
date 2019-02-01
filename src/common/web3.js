import web3 from './web3';


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

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0xb84b12e953f5bcf01b05f926728e855f2d4a67a9';
//use the ABI from your contract
const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "getHash",
    "outputs": [
      {
        "name": "x",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "x",
        "type": "string"
      }
    ],
    "name": "sendHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
export default new web3.eth.Contract(abi, address);