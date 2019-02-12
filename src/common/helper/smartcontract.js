import Web3 from 'web3';
import { address, abi } from '../const/contract';

export function initContract(window) {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
      window.ethereum.enable().then( () => {
        const myContract = new web3.eth.Contract(abi, address);
        return myContract;
      });
  } else {
    alert('You have to install MetaMask !');
  }
}