import * as ipfsClient from 'ipfs-http-client';
import { arrayBufferToBase64, base64ToArrayBuffer } from 'utils/helper/common';
import { encryptAes, decryptAes, hashSha256 } from 'utils/helper/crypto';
import { saveAs } from 'file-saver';

const ipfs = ipfsClient('localhost', '5001', { protocol: 'http' })
const nameFile = "out.txt";

export const saveToIpfs = (reader) => {
  const hashFile = hashSha256(reader.result);
  const arrayBuffer = base64ToArrayBuffer(encryptAes(reader.result));
  const buffer = Buffer.from(arrayBuffer);
  return ipfs.add(buffer)
  .then((response) => {
    return {
      path: response[0].path,
      hashFile,
      size: response[0].size
    };
  })
  .catch((err) => {
    console.error(err)
  })
}


export const getFromIpfs = (ipfsId) => {
  ipfs.get(ipfsId, function (err, files) {
    files.forEach((file) => {
      if (file && file.content) {
        const contentBase64 = decryptAes(arrayBufferToBase64(file.content));
        urltoFile(contentBase64, nameFile, 'text/plain')
          .then(function(file){
              saveAs(file);
          })
      }
    })
  })
}
function urltoFile(url, filename, mimeType){
  return (fetch(url)
      .then(function(res){return res.arrayBuffer();})
      .then(function(buf){return new File([buf], filename, {type:mimeType});})
  );
}
