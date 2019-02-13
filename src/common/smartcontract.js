import { getDocManagerFactory } from './contract/DocManager';
import { getWeb3 } from './helper/getWeb3';

export async function testPing() {
    const web3 = await getWeb3();
    // get account
    const accounts = await web3.eth.getAccounts();
    const docContract = await getDocManagerFactory();
    // const result = await docContract.methods.newDocument("name", "hash file", "linkIpfs").send({from: accounts[0]});
    
    const block =  await docContract.methods.getDocument(1).call()
    // web3.eth.getStorageAt("0x04239fd749af6b7f8ae1028a3ee100e1e4d5525d", latest)
    // .then(console.log);
    console.log(block);
}