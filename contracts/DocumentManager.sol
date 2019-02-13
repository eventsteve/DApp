pragma solidity ^0.4.22;

contract DocumentManager {
	
    mapping (uint => Document) documents;
    uint public nbDocuments;
    address public owner;

    enum Status {UNKNOWN, PENDDING, OPEN, DENIED}

    struct Document{
        address owner;
        string name;
        string linkIpfs;
        string hashFile;
        uint nbRequests;
        string encryptKey;
        mapping (uint => Request) requests;
    }

    struct Request {
        address owner;
        Status status;
    }

    constructor() public {
        owner = msg.sender;
    }

    function newDocument(string hash, string name, string linkIpfs, string encryptKey) public returns (uint){
        nbDocuments++;
        documents[nbDocuments].owner = msg.sender;
        documents[nbDocuments].name = name;
        documents[nbDocuments].linkIpfs = linkIpfs;
        documents[nbDocuments].hashFile = hash;
        documents[nbDocuments].encryptKey = encryptKey;
        documents[nbDocuments].nbRequests = 0;
        return nbDocuments;
    }

    function requestDocument(uint documentId) public {
        Document storage document = documents[documentId];
        document.nbRequests++;
        Request storage request = document.requests[document.nbRequests];
        request.status = Status.PENDDING;
        request.owner = msg.sender;
    }

    function grantAccess(uint documentId, uint requestId) public {
        Document storage document = documents[documentId];
        if(document.owner == msg.sender && document.requests[requestId].status == Status.PENDDING) {
            document.requests[requestId].status = Status.OPEN;
        }
    }

    function denyAccess(uint documentId, uint requestId) public {
        Document storage document = documents[documentId];
        if(document.owner == msg.sender) {
            document.requests[requestId].status = Status.DENIED;
        }
    }

    function getRequestOwner(uint documentId, uint requestId) public view returns (address) {
        Document storage document = documents[documentId];
        if(document.owner == msg.sender){
            return document.requests[requestId].owner;
        }
    }

    function getRequestStatus(uint documentId, uint requestId) public view returns (Status) {
        return documents[documentId].requests[requestId].status;
    }

    // function getDocument(uint documentId) public view returns (string name, string linkIpfs, string hash, string keyEncrypt) {
    //     return documents[documentId].document;
    // }

}