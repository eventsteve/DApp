pragma solidity ^0.4.22;

contract DocumentManager {

    mapping (uint => Document) documents;
    uint public nbDocuments;
    address public owner;

    enum Status {UNKNOWN, PENDDING, OPEN, DENIED}

    struct Document{
        address owner;
        string name;
        string hashFile;
        string cryptLink;
        uint nbRequests;
        mapping (uint => Request) requests;
    }

    struct Request {
        address owner;
        Status status;
    }

    constructor() public {
        owner = msg.sender;
    }

    event LogCreatedDoc(
        uint indexed numDoc,
        address indexed _owner,
        string _name,
        string _hashFile
    );

    function newDocument(
        string _name,
        string _hashFile,
        string _cryptLink
    )
        public
        returns (bool success)
    {
        nbDocuments++;
        documents[nbDocuments].owner = msg.sender;
        documents[nbDocuments].name = _name;
        documents[nbDocuments].hashFile = _hashFile;
        documents[nbDocuments].cryptLink = _cryptLink;
        documents[nbDocuments].nbRequests = 0;

        emit LogCreatedDoc(
            nbDocuments,
            msg.sender,
            _name,
            _hashFile
        );

        return true;
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
        if (document.owner == msg.sender && document.requests[requestId].status == Status.PENDDING) {
            document.requests[requestId].status = Status.OPEN;
        }
    }

    function denyAccess(uint documentId, uint requestId) public {
        Document storage document = documents[documentId];
        if (document.owner == msg.sender) {
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

    function getDocumentByIndex(
        uint documentId
    )
        public
        view
        returns (
            address ownerO,
            string name,
            string hashFile,
            string cryptLink,
            uint nbRequests
        )
    {
        return (
            documents[documentId].owner,
            documents[documentId].name,
            documents[documentId].hashFile,
            documents[documentId].cryptLink,
            documents[documentId].nbRequests
        );
    }

    function getLastestDocument()
        public
        view
        returns (
            address ownerO,
            string name,
            string hashFile,
            string cryptLink,
            uint nbRequests
        )
    {
        return (
            documents[nbDocuments].owner,
            documents[nbDocuments].name,
            documents[nbDocuments].hashFile,
            documents[nbDocuments].cryptLink,
            documents[nbDocuments].nbRequests
        );
    }
}