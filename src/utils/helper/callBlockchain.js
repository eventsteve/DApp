export function getDocMinedByIndex(numdoc, contract) {
  return new Promise((resolve, reject) => {
    contract.methods.getDocumentByIndex(numdoc).call((error, docBlock) => {
      if (error) reject(error)
      if(docBlock._owner === "0x0000000000000000000000000000000000000000") {
        reject("Not found document");
      }

      const result= {
        owner: docBlock._owner,
        name: docBlock._name,
        contentHash: docBlock._contentHash,
        linkIpfsCrypt: docBlock._linkIpfsCrypt,
      };
      resolve(result)
    })
  });
}

export function mineNewBlock(docInfo, contract, owner) {
  return new Promise((resolve, reject) => {
    contract.methods.newDocument(docInfo.name , docInfo.hashContent, docInfo.ipfsCrypt).send({from: owner})
      .on('receipt', (receipt) => {

        const result = {
          blockInfo: null,
          dataInfo: null
        }
        
        result.blockInfo = {
          blockHash: receipt.blockHash,
          blockNumber: receipt.blockNumber,
          gasUsed: receipt.gasUsed,
          status: receipt.status,
          transactionHash: receipt.transactionHash
        }
        
        const { LogCreatedDoc } = receipt.events
        result.dataInfo = {
          numDoc: LogCreatedDoc.returnValues._numDoc,
          name: LogCreatedDoc.returnValues._name,
          contentHash: LogCreatedDoc.returnValues._contentHash,
          linkIpfsCrypt: LogCreatedDoc.returnValues._linkIpfsCrypt,
          owner: LogCreatedDoc.returnValues._owner
        }
        resolve(result);
      }).on('error', (err) => reject(err));
  });
}