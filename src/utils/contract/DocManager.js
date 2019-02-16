import contract from '../../../build/contracts/DocumentManager.json'
import { getWeb3 } from '../helper/getWeb3';

export async function getDocManagerFactory() {
  const web3 = await getWeb3();
  //use your own contract address
  const networks = contract.networks["5777"];
  //use the ABI from your contract
  const abi = contract.abi

  return web3.eth.Contract(abi, networks.address);
};