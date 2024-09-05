// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./BudgetAllocation.sol";

contract FundRequest {
    BudgetAllocation public budgetContract;

    struct Request {
        uint256 amount;
        string reason;
        bool approved;
        bool exists; // To check if a request exists
    }

    mapping(address => Request) public requests;

    event FundRequested(address indexed department, uint256 amount, string reason);
    event FundApproved(address indexed department, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == budgetContract.admin(), "Only admin can execute this");
        _;
    }

    modifier validDepartment() {
        require(budgetContract.approved(msg.sender), "Department not approved for funding");
        _;
    }

    constructor(address _budgetContract) {
        budgetContract = BudgetAllocation(payable(_budgetContract));
    }

    // Function for departments to request funds
    function requestFunds(uint256 _amount, string calldata _reason) external validDepartment {
        require(_amount > 0, "Request amount must be greater than zero");
        require(!requests[msg.sender].exists, "Request already exists, wait for approval or rejection");

        // Create a new request
        requests[msg.sender] = Request({
            amount: _amount,
            reason: _reason,
            approved: false,
            exists: true
        });

        emit FundRequested(msg.sender, _amount, _reason);
    }

    // Admin approves the fund request
    function approveRequest(address _department, uint256 _id) external onlyAdmin {
        Request storage request = requests[_department];
        require(request.exists, "No fund request found");
        require(!request.approved, "Request already approved");

        // Approve and disburse funds
        request.approved = true;

        // Disburse funds only after approval to prevent re-entrancy
        budgetContract.disburseFunds(_department, request.amount, _id);

        emit FundApproved(_department, request.amount);
    }

    // Optional: Admin can reject a request
    function rejectRequest(address _department) external onlyAdmin {
        Request storage request = requests[_department];
        require(request.exists, "No fund request found");
        require(!request.approved, "Cannot reject an already approved request");

        // Remove the request after rejection
        delete requests[_department];
    }
}