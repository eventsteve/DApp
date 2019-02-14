const DocContract = artifacts.require('./DocumentManager.sol')

contract("DocumentManager", async ([owner]) => {
  let documentManager
  beforeEach('setup contract for each test', async function () {
    documentManager = await DocContract.new()
  })

  it('has an owner', async function () {
      assert.equal(await documentManager.owner(), owner)
  })

  it('create a doc then check exist this block on truffle', async function () {
    const nameDoc = "name doc";
    const hashFile = "this is hash file";
    const cryptLink = "link ipfs";

    // mine to ethereum
    const result = await documentManager.newDocument(nameDoc, hashFile, cryptLink, {from: owner});
    console.log(result.call());
    
    // // get block mined
    // const docBlockMined = await documentManager.getDocument(0);
    
    // console.log(docBlockMined);
    
    // const ownerDoc = docBlockMined[0];
    // const nameDocResult = docBlockMined[1];
    // const hashFileResult = docBlockMined[2];
    // const cryptLinkResult = docBlockMined[3];
    // const nRequestResult = docBlockMined[4].toNumber()
    
    // // assert.equal(ownerDoc, owner)
    // assert.equal(nameDocResult, nameDoc)
    // assert.equal(hashFileResult, hashFile)
    // assert.equal(cryptLinkResult, cryptLink)
    // assert.equal(nRequestResult, 0)
})

});