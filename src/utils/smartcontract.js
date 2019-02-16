import { getDocManagerFactory } from './contract/DocManager';
import { getWeb3 } from './helper/getWeb3';

export async function testPing() {
    const web3 = await getWeb3();
    const docContract = await getDocManagerFactory();
    
    // get account
    const accounts = await web3.eth.getAccounts();

    const block =  await docContract.methods.getDocumentByIndex(0).call()
    console.log(block);
    
    const event = docContract.events.LogCreatedDoc({}, {fromBlock: 0, toBlock: 'latest'}, (error, event) => { console.log(event); });
    event.on('data', (event) => {
        console.log(event);
    })
    .on('changed', (event) => {
    })
    .on('error', console.error);

    // await docContract.methods.newDocument("name", "hash file", "linkIpfs").send({from: accounts[0]});
}