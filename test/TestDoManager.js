const DocContract = artifacts.require('./DocumentManager.sol')

contract("DocumentManager", async ([owner, mem]) => {
  let documentManager

  beforeEach('setup contract for each test', async () => {
    documentManager = await DocContract.new()
  })

  it('has an owner', async function () {
      assert.equal(await documentManager.owner(), owner)
  })

  it('create a doc then check exist this block on truffle', async () => {
    const nameDoc = "name doc";
    const hashFile = "this is hash file";
    const cryptLink = "link ipfs";

    // mine to ethereum, create new doc
    await documentManager.newDocument(nameDoc, hashFile, cryptLink, {from: mem});

    // get block mined
    const docBlockMined = await documentManager.getLastestDocument();
    
    const ownerResult = docBlockMined[0];
    const nameDocResult = docBlockMined[1];
    const hashFileResult = docBlockMined[2];
    const cryptLinkResult = docBlockMined[3];
    const nRequestResult = docBlockMined[4].toNumber()
    
    assert.equal(ownerResult, mem)
    assert.equal(nameDocResult, nameDoc)
    assert.equal(hashFileResult, hashFile)
    assert.equal(cryptLinkResult, cryptLink)
    assert.equal(nRequestResult, 0)
  })

});