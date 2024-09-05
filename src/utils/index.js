import { Web3 } from "web3";
import budgetAllowanceAbi from "../abis/BudgetAllocation.json";
import fundRequestAbi from "../abis/FundRequest.json";
import publicDashboardAbi from "../abis/PublicDashboard.json";

const BUDGET_ALLOWANCE_CONTRACT_ADDRESS = "0x2d5167037Df5075B3345a09C2135502ffbbf8940";
const FUND_REQUEST_CONTRACT_ADDRESS = "0x070D439F85422896Ef30fddA897e529C0DB57801";
const PUBLIC_DASHBOARD_CONTRACT_ADDRESS = "0x946017124b77dEe1d7eefA3Ea9102CB3E54451eB";

export const web3 = new Web3(window.ethereum);

export const connectWallet = async () => {
  console.log("Connecting...")
  if (web3 === null) {
    console.log("Not connected")
    return;
  }
  try {
    console.log("Trying ")
    await window.ethereum.request({ method: "eth_requestAccounts" });
    // Request account access
    // await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Get the connected accounts
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    // Return the first account address
    return accounts[0];
  } catch (error) {
    console.error("User denied account access or an error occurred:", error);
    return null;
  }
}

const initializeContracts = async () => {
  const budgetAllowanceContract = new web3.eth.Contract(budgetAllowanceAbi.abi, BUDGET_ALLOWANCE_CONTRACT_ADDRESS);
  console.log(budgetAllowanceContract);

  const fundRequestContract = new web3.eth.Contract(fundRequestAbi.abi, FUND_REQUEST_CONTRACT_ADDRESS);

  const publicDashboardContract = new web3.eth.Contract(publicDashboardAbi.abi, PUBLIC_DASHBOARD_CONTRACT_ADDRESS);

  return { budgetAllowanceContract, fundRequestContract, publicDashboardContract }
}

export const createBudget = async (budgetDetails) => {
  const { orgName, budget } = budgetDetails;
  const {budgetAllowanceContract} = await initializeContracts();
  // const budgetAllowanceContract = new web3.eth.Contract(budgetAllowanceAbi.abi, BUDGET_ALLOWANCE_CONTRACT_ADDRESS);
  
  try {
    console.log('web3', web3.eth)
    // await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.requestAccounts();
    console.log('accounts connected', accounts[0]);
    console.log(budgetAllowanceContract);

    const budgetTx = await budgetAllowanceContract.methods.setBudgetParams(orgName, Number(budget)).send({ from: accounts[0], value: 1000000000});

    console.log(budgetTx);

    // console.log("Budget Added With Hash: ", budgetTx.transactionHash);
  } catch (err) {
    console.log(err);
  }
}

export const getSavedBudget = async (id) => {
  const {budgetAllowanceContract} = await initializeContracts();
  console.log(budgetAllowanceContract)
  try {
    const budget = await budgetAllowanceContract.methods.getBudget(id).call();
    return budget;
  } catch (err) {
    console.log(err);
  }
}