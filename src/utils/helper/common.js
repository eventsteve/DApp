export function arrayBufferToBase64 (buffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

export function base64ToArrayBuffer (s) {
  const asciiString = atob(s);
  return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

export function parsenDataBlock(blockReturn) {
  return {
    numDoc: blockReturn._numDoc,
    owner: blockReturn._owner,
    name: blockReturn._name,
    contentHash: blockReturn._contentHash,
    linkIpfsCrypt: blockReturn._linkIpfsCrypt,
    createdAt: blockReturn._createdAt
  }
}

export function parsenFullBlock(block) {
  const { returnValues } = block.events.LogCreatedDoc
  return {
    blockHash: block.blockHash,
    blockNumber: block.blockNumber,
    gasUsed: block.gasUsed,
    status: block.status,
    transactionHash: block.transactionHash,
    content: {
      numDoc: returnValues._numDoc,
      owner: returnValues._owner,
      name: returnValues._name,
      contentHash: returnValues._contentHash,
      linkIpfsCrypt: returnValues._linkIpfsCrypt,
      createdAt: returnValues._createdAt
    }
  }
}

export function convertTimeStampToString(timestamp) {
  const date = new Date(parseInt(timestamp)*1000);
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const yy = date.getFullYear();
  const ddmmyy = [
          (dd>9 ? '' : '0') + dd,
          (mm>9 ? '' : '0') + mm,
          yy
         ].join('-');
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();

  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + ' ' + ddmmyy;
}