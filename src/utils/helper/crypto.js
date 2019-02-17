import { AES, enc } from 'crypto-js';
const key = "key";

export function encryptAes(data) {
    return AES.encrypt(data, key);
}

export function decryptAes(data) {
    return AES.decrypt(data, key).toString(enc.Latin1);;
}