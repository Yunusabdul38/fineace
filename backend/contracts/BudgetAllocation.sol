// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract BudgetAllocation {
    // State variables
    address private constant PLATFORM_ADDRESS = 0x6b7978560661acC18d861b5701f2843dD685b6bF;
    // uint256 public constant PLATFORM_FEE = 0.000001 ether;
    
    address public admin;
    uint256 public departmentCount;
    uint256 public budgetCount;

    struct BudgetData {
        address admin;
        string orgName;
        uint256 totalBudget;
        string[] departments;
    }

    struct DepartmentData {
        address departmentAddress;
        uint256 budget;
        uint256 spent;
    }

    mapping(address => uint256) public allocations; // Maps departments/projects to their allocated budget
    mapping(address => bool) public approved; // Checks if a department/project is approved
    mapping(uint256 => BudgetData) public budgets;
    mapping(address => DepartmentData[]) public departments;

    event BudgetAllocated(address indexed department, uint256 amount);
    event FundsDisbursed(address indexed department, uint256 amount);
    event BudgetCreated(BudgetData indexed budget);
    event BudgetUpdated(uint256 indexed updatedTotalBudget);

    modifier onlyAdmin(address _admin) {
        require(msg.sender == _admin, "Only admin can execute this");
        _;
    }

    modifier validAddress(address _addr) {
        require(_addr != address(0), "Invalid address");
        _;
    }

    // Function to set the total budget
    function setBudgetParams(string memory orgName, uint256 _totalBudget, string[] memory _departments) external {
        // require(msg.value >= PLATFORM_FEE, "Invalid amount entered");
        require(_totalBudget > 0, "Invalid budget");

        // (bool success, ) = payable(PLATFORM_ADDRESS).call{ value: msg.value }("");
        // require(success, "Failed to transfer funds");

        // string[] memory _departments = ["name", "name2"];

        budgets[budgetCount] = BudgetData (
            msg.sender, // admin
            orgName, // orgName
            _totalBudget, // totalBudget
            _departments // departments
        );

        emit BudgetCreated(budgets[budgetCount]);

        budgetCount ++;
    }

    // Function to allocate budget to departments/projects
    function allocateBudget(address _department, uint256 _amount, uint256 _id)
        external
        onlyAdmin(budgets[_id].admin)
        validAddress(_department)
    {
        require(_amount <= budgets[_id].totalBudget, "Allocation exceeds total budget");
        require(
            allocations[_department] == 0,
            "Department already has an allocation"
        );
        allocations[_department] = _amount;
        approved[_department] = true;

        departments[msg.sender].push(DepartmentData (
            _department, // departmentAddress
            _amount, // budget
            0 // spent
        ));
        
        budgets[_id].totalBudget -= _amount;

        emit BudgetAllocated(_department, _amount);
    }

    // Function to disburse funds to a department/project
    function disburseFunds(address _department, uint256 _amount, uint256 _id)
        external
        payable
        onlyAdmin(budgets[_id].admin)
        validAddress(_department)
    {
        require(approved[_department], "Department not approved for funding");
        require(
            _amount <= allocations[_department],
            "Amount exceeds allocated budget"
        );

        // Update state variables first to avoid reentrancy issues
        allocations[_department] -= _amount;
        DepartmentData[] memory orgDepartment = departments[msg.sender];
        for (uint i; i < orgDepartment.length; i++) 
        {
            if(orgDepartment[i].departmentAddress == _department) {
                orgDepartment[i].spent += _amount;
            }
        }

        // Perform the transfer after state updates
        (bool success, ) = payable(_department).call{value: _amount}("");
        require(success, "Failed to transfer funds");

        emit FundsDisbursed(_department, _amount);
    }

    // Function to track expenditure
    function trackSpending(
        address _department,
        uint256 _id
    ) external onlyAdmin(budgets[_id].admin) view returns(uint256) {
        uint256 moneySpent;
        DepartmentData memory department;
        DepartmentData[] memory orgDepartment = departments[msg.sender];
        for (uint i; i < orgDepartment.length; i++) 
        {
            if(orgDepartment[i].departmentAddress == _department) {
                department = orgDepartment[i];
                moneySpent = department.spent;
            }
        }

        return moneySpent;
    }

    // Function to update total budget if needed
    function updateTotalBudget(uint256 _additionalAmount, uint256 _id) external onlyAdmin(budgets[_id].admin) {
        budgets[_id].totalBudget += _additionalAmount;
        emit BudgetUpdated(budgets[_id].totalBudget);
    }

    // Function to get the total budget
    function getTotalBudget(uint256 _id) external view returns (uint256) {
        return budgets[_id].totalBudget;
    }

    // Get a budget
    function getBudget(uint256 _id) external view returns(BudgetData memory) {
        return budgets[_id];
    }

    // Get department
    function getDepartment(address _department, uint256 _id) external onlyAdmin(budgets[_id].admin) view returns(DepartmentData memory) {
        DepartmentData memory department;

        DepartmentData[] memory orgDepartment = departments[msg.sender];
        for (uint i; i < orgDepartment.length; i++) 
        {
            if(orgDepartment[i].departmentAddress == _department) {
                department = orgDepartment[i];
            }
        }

        return department;
    }

    // Receive Ether directly into the contract
    receive() external payable {}

    // Fallback function to handle unexpected Ether with a revert to ensure it's intended
    fallback() external payable {
        revert("Unsupported operation");
    }
}
