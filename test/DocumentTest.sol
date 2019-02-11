pragma solidity ^0.4.22;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DocumentManager.sol";

contract DocumentTest {
    DocumentManager document = DocumentManager(DeployedAddresses.DocumentManager());
    
    struct Document{
        address owner;
        string document;
        string name;
        uint nbRequests;
        string privateKey;
    }

    address expectedDocument = address(this);

    function testPing() public {
        string memory result = document.ping();
        string memory expected = "pong";
        Assert.equal(result, expected, "Something errors");
    }

    function testCreateNewDoc() public {
        document.
    }
}