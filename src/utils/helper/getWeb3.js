import Web3 from 'web3';

export async function getWeb3(){
  return new Promise(async (resolve, reject) => {
    // Modern dapp browsers...
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
    else {
      alert('MetaMask is not installed');
      reject(0);
    }
  });
}