// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Recommendation2 {
    struct Asset {
        string name;
        uint amount;
    }
    uint numberOfUsers = 0;

    mapping(address => Asset[]) public userPortfolio;
    mapping(address => uint) public rOI;

    address[] public userAddresses;

    function updateROI(address _user) public{
        uint256 _roi = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, _user)));
        _roi = _roi % 100;
        rOI[_user] = _roi;
    }

    
    function addAsset(address _user, string memory _assetName, uint _assetAmt) public {
        Asset memory asset = Asset(_assetName, _assetAmt);
        userPortfolio[_user].push(asset);
        updateROI(_user);
        userAddresses.push(_user);
    }

    function addMultipleStocks(address _user, string[] memory _assetNames, uint[] calldata _assetAmts) public {
        for (uint i; i < _assetNames.length; i++) {
            string memory asset = _assetNames[i];
            uint amt = _assetAmts[i];
            addAsset(_user, asset, amt);
        }
    }

    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    

    function recommendation(string memory _stock) public view returns (string memory){
        address[] memory availAddresses;
        uint index = 0;
        for (uint i; i< userAddresses.length; i++) {
            for (uint j; j < userPortfolio[userAddresses[i]].length; j++) {
                if (compareStrings(userPortfolio[userAddresses[i]][j].name, _stock)) {
                    availAddresses[index] = (userAddresses[i]);
                    index++;
                }
            }
        }

        uint maxROI = 0;
        address target;
        for (uint i; i < availAddresses.length; i++) {
            if (rOI[availAddresses[i]] > maxROI) {
                target = availAddresses[i];
                maxROI = rOI[availAddresses[i]];
            }
        }
        string memory coin = 'CRO';
        for (uint i; i < userPortfolio[target].length; i++){
            if (compareStrings(userPortfolio[target][i].name, 'ETH')){
                coin = 'CRO';
            }
            else {
                coin = 'BTC';
            }
        }
        uint256 recc = uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
        recc = recc % 1;
        if (recc == 0) {
            return coin;
        } else {
            return "BTC";
        }
    }
}