import * as contract from '../../../build/contracts/DocumentManager.json'

console.log(contract.bytecode);

//use your own contract address
export const address = '0x9ee71285a4758fc536441355a7ba5f3a3e47d8d1';
//use the ABI from your contract
export const abi = contract.abi