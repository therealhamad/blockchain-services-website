//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.20;

contract LegalToSmart {
    
    function getCurrentTime()public view returns(uint){
        return block.timestamp;
    }

    function senEth(address payable r, uint256 am, uint128 ct) public payable {
        require(msg.sender.balance >= am, "Insufficient balance");
        require(getCurrentTime() <= ct, "Time overrun");
        r.transfer(am);
    }
}
