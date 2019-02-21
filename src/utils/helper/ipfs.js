import * as ipfsClient from 'ipfs-http-client';
import { arrayBufferToBase64, base64ToArrayBuffer } from 'utils/helper/common';
import { encryptAes, decryptAes, hashSha256 } from 'utils/helper/crypto';
import { saveAs } from 'file-saver';

const ipfs = ipfsClient('localhost', '5001', { protocol: 'http' })
const nameFile = "out.txt";

export const saveToIpfs = (reader) => {
  const contentBase64 = reader.result;
  const hashContent = hashSha256(contentBase64);
  const arrayBuffer = base64ToArrayBuffer(encryptAes(contentBase64));
  const buffer = Buffer.from(arrayBuffer);
  return ipfs.add(buffer)
  .then((response) => {
    return {
      ipfs: response[0].path,
      ipfsCrypt: encryptAes(response[0].path),
      hashContent
    };
  })
  .catch((err) => {
    console.error(err)
  })
}

export const getFromIpfs = (ipfsCrypt) => {
  return new Promise((resolve, reject) => {
    const ipfsId = decryptAes(ipfsCrypt)
    console.log(ipfsId);
    
    ipfs.get(ipfsId, (err, files) => {
      if (err) reject(err);
      const file = files[0];
      if (file && file.content) {
        const contentBase64 = decryptAes(arrayBufferToBase64(file.content));
        if (!contentBase64) {
          reject(`Can't decrypt content file.`);
        }
        urltoFile(contentBase64, nameFile, 'text/plain')
        .then((file) => {
          resolve(saveAs(file));
        })
      }
    })
  })
}
function urltoFile(url, filename, mimeType){
  return (fetch(url)
      .then((res)=> res.arrayBuffer())
      .then((buf) => new File([buf], filename, {type:mimeType}))
  );
}
