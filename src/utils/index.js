import { Web3 } from "web3";
import budgetAllocationAbi from "../abis/BudgetAllocation.json";
import fundRequestAbi from "../abis/FundRequest.json";
import publicDashboardAbi from "../abis/PublicDashboard.json";

const BUDGET_ALLOCATION_CONTRACT_ADDRESS = "0x073553ee8fEc1999eC042e6D00fb28eE5eEF7edC";
const FUND_REQUEST_CONTRACT_ADDRESS = "0x9aa754E04c640A331B0CbDc708008d3333C50609";
const PUBLIC_DASHBOARD_CONTRACT_ADDRESS = "0xB5Ff3CB7E752A8F5F671a8fF80328419E89F54AA";

export const web3 = new Web3(window.ethereum);

const initializeContracts = async () => {
  const budgetAllocationContract = new web3.eth.Contract(budgetAllocationAbi.abi, BUDGET_ALLOCATION_CONTRACT_ADDRESS);
  console.log(budgetAllocationContract);

  const fundRequestContract = new web3.eth.Contract(fundRequestAbi.abi, FUND_REQUEST_CONTRACT_ADDRESS);

  const publicDashboardContract = new web3.eth.Contract(publicDashboardAbi.abi, PUBLIC_DASHBOARD_CONTRACT_ADDRESS);

  return { budgetAllocationContract, fundRequestContract, publicDashboardContract }
}

export const createBudget = async (budgetDetails) => {
  const { orgName, budget, departmentArray } = budgetDetails;
  const {budgetAllocationContract} = await initializeContracts();
  // const budgetAllocationContract = new web3.eth.Contract(budgetAllocationAbi.abi, BUDGET_ALLOCATION_CONTRACT_ADDRESS);
  
  try {
    console.log('web3', web3.eth)
    // await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.requestAccounts();
    console.log('accounts connected', accounts[0]);
    console.log(budgetAllocationContract);

    const budgetTx = await budgetAllocationContract.methods.setBudgetParams(orgName, budget, departmentArray).send({ from: accounts[0],gasPrice: 300000000 });
    // console.log(budgetTx);

    console.log("Budget Added With Hash: ", budgetTx.transactionHash);
  } catch (err) {
    console.log(err);
  }
}

export const getSavedBudget = async (id) => {
  const {budgetAllocationContract} = await initializeContracts();
  console.log(budgetAllocationContract)
  try {
    const budget = await budgetAllocationContract.methods.getBudget(id).call();
    return budget;
  } catch (err) {
    console.log(err);
  }
}

export const requestForFunds = async(reason, amount, budgetId) => {
  const { budgetAllocationContract, fundRequestContract } = await initializeContracts();
  const accounts = await web3.eth.requestAccounts();
  // console.log('accounts connected', accounts[0]);

  const reqTx = await fundRequestContract.methods.requestFunds(amount, reason).send({from: accounts[0], gasPrice: 300000000});

  console.log("Transaction Hash: ", reqTx);
}

export const getAllBudgets = async() => {
  const {budgetAllocationContract} = await initializeContracts();
  console.log("Fetching")

  const getBudgetCount = await budgetAllocationContract.methods.budgetCount().call();
  let allBudgets = [];

  for(let i= 0; i < getBudgetCount; i++) {
    const budget = await getSavedBudget(i)
    allBudgets.push(budget);
  }

  return allBudgets;
}

export const approveFundRequest = async(department, id) => {
  const {fundRequestContract} = await initializeContracts();
  const accounts = await web3.eth.requestAccounts();
  const approveReqTx = await fundRequestContract.methods.approveRequest(department, id).send({from: accounts[0], gasPrice: 300000000})

  console.log("Transaction Hash: ", approveReqTx);
}

export const rejectFundRequest = async(department) => {
  const {fundRequestContract} = await initializeContracts();
  const accounts = await web3.eth.requestAccounts();

  const rejectReqTx = await fundRequestContract.methods.rejectRequest(department).send({from: accounts[0], gasPrice: 300000000})

  console.log("Transaction Hash: ", rejectReqTx.transactionHash);
}

export const allocateBudgetToDepartment = async(department, amount, id) => {
  const {budgetAllocationContract} = await initializeContracts();

  const allocateTx = await budgetAllocationContract.methods.allocateBudget(department, amount, id).send({from: accounts[0], gas: 300000000})

  console.log("Transaction Hash: ", allocateTx.transactionHash);
}

export const getDepartmentAllocation = async(department) => {
  const {publicDashboardContract} = await initializeContracts();
  const getAllocationTx = await publicDashboardContract.methods.getAllocation(department).call();

  console.log("Transation Hash: ", getAllocationTx);

  return getAllocationTx;
}