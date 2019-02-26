# SmartContract - Solidity - Truflle - React - IPFS

## Setup Tool
- Download `ganache` from `https://truffleframework.com/ganache` and setting port `8545` same port on file `truflle.js`
- Setup `MetaMask` for browser, then create a account and a customRpc listen to port truffle `8545`.
- Install `Ipfs` from `https://docs.ipfs.io/introduction/install`
- Run ipfs
```
ipfs init
ipfs daemon
```
- Config cors header ipfs client
```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods "[\"PUT\", \"POST\",\"GET\"]"
```

## Install library
```
git clone https://github.com/Tinh96nb/DApp.git
npm install -g truffle
cd DApp
npm install
```

## Start project
- Start mode dev: `npm start`
- Build product: `npm build`

## Struct folder
- `/migrations`: step file for migrate.
- `/contracts`: smartcontract.
- `/src`: reactjs front-end.
