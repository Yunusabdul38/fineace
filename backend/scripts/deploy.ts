import { ethers } from "hardhat";

async function main() {
    const BudgetAllocation = await ethers.getContractFactory("BudgetAllocation");
    const budgetAllocation = await BudgetAllocation.deploy();
    
    const FundRequest = await ethers.getContractFactory("FundRequest");
    const fundRequest = await FundRequest.deploy(budgetAllocation.target);

    const PublicDashboard = await ethers.getContractFactory("PublicDashboard");
    const publicDashboard = await PublicDashboard.deploy(budgetAllocation.target);

    console.log("First contract: ", budgetAllocation.target);
    console.log("Second contract: ", fundRequest.target);
    console.log("Third contract: ", publicDashboard.target);
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
})