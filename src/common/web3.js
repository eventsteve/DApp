//use your own contract address
export const address = '0x9ee71285a4758fc536441355a7ba5f3a3e47d8d1';
//use the ABI from your contract
export const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "nbDocuments",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "ping",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "hash",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      }
    ],
    "name": "newDocument",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      },
      {
        "name": "requestId",
        "type": "uint256"
      },
      {
        "name": "encryptedKey",
        "type": "string"
      }
    ],
    "name": "grantAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      },
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "denyAccess",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      },
      {
        "name": "publicKey",
        "type": "string"
      }
    ],
    "name": "requestDocument",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      }
    ],
    "name": "getLastRequestId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      },
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "getOpenRequestPublicKey",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      },
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "getRequestOwner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      }
    ],
    "name": "getDocument",
    "outputs": [
      {
        "name": "hash",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      }
    ],
    "name": "getDocumentName",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      },
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "getEncryptedKeyFromRequest",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      }
    ],
    "name": "getDocumentHash",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentId",
        "type": "uint256"
      },
      {
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "getRequestStatus",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]