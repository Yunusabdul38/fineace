// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./BudgetAllocation.sol";

contract PublicDashboard {
    BudgetAllocation public budgetContract;

    modifier isValidDepartment (address _department) {
        require(_department != address(0), "Invalid department address");
        _;
    }

    constructor(address _budgetContract) {
        require(_budgetContract != address(0), "Invalid contract address");
        budgetContract = BudgetAllocation(payable(_budgetContract));
    }

    // Function to get the allocation for a department
    function getAllocation(address _department) external view isValidDepartment(_department) returns (uint256) {
        uint256 allocation = budgetContract.allocations(_department);
        require(allocation > 0, "No allocation found for department");
        return allocation;
    }

    // Function to get the amount spent by a department
    function getSpent(address _department, uint256 _id) external view isValidDepartment(_department) returns (uint256) {
        return budgetContract.trackSpending(_department, _id);
    }

    // Function to get the remaining budget for a department
    function getRemainingBudget(address _department, uint256 _id) external view isValidDepartment(_department) returns (uint256) {
        uint256 allocation = budgetContract.allocations(_department);
        uint256 spent = budgetContract.trackSpending(_department, _id);
        require(allocation >= spent, "Spent amount exceeds allocation"); // Safeguard against underflow
        return allocation - spent;
    }

    // Receive Ether directly into the contract
    receive() external payable {}

    // Fallback function to handle unexpected Ether with a revert to ensure it's intended
    fallback() external payable {
        revert("Unsupported operation");
    }

    
}