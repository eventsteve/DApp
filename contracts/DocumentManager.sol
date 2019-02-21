pragma solidity ^0.4.22;

contract DocumentManager {

    mapping (uint => Document) documents;
    uint public numDocuments;
    address public owner;

    enum Status {UNKNOWN, PENDDING, OPEN, DENIED}

    struct Document{
        address owner;
        string name;
        string contentHash;
        string linkIpfsCrypt;
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
        uint indexed _numDoc,
        address indexed _owner,
        string _name,
        string _contentHash,
        string _linkIpfsCrypt
    );

    function newDocument(
        string _name,
        string _contentHash,
        string _linkIpfsCrypt
    )
        public
        returns (bool success)
    {
        numDocuments++;
        documents[numDocuments].owner = msg.sender;
        documents[numDocuments].name = _name;
        documents[numDocuments].contentHash = _contentHash;
        documents[numDocuments].linkIpfsCrypt = _linkIpfsCrypt;
        documents[numDocuments].nbRequests = 0;

        emit LogCreatedDoc(
            numDocuments,
            msg.sender,
            _name,
            _contentHash,
            _linkIpfsCrypt
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
            address _owner,
            string _name,
            string _contentHash,
            string _linkIpfsCrypt
        )
    {
        return (
            documents[documentId].owner,
            documents[documentId].name,
            documents[documentId].contentHash,
            documents[documentId].linkIpfsCrypt
        );
    }

    function getLastestDocument()
        public
        view
        returns (
            uint _numDo,
            address _owner,
            string _name,
            string _contentHash,
            string _linkIpfsCrypt
        )
    {
        return (
            numDocuments,
            documents[numDocuments].owner,
            documents[numDocuments].name,
            documents[numDocuments].contentHash,
            documents[numDocuments].linkIpfsCrypt
        );
    }
}