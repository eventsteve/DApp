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
        hashFile: docBlock._hashFile,
        cryptLink: docBlock._cryptLink,
      };
      resolve(result)
    })
  });
}

export function mineNewBlock(docInfo, contract, owner) {
  
  return new Promise((resolve, reject) => {
    contract.methods.newDocument(docInfo.name , docInfo.hashFile, docInfo.path).send({from: owner})
    .on('receipt', (receipt) => {
      resolve(receipt);
    });
  });
}