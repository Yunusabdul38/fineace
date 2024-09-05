import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY =
  "e8cc7f2835d513deb64ca490b5e7521ea0c716f16fa9c5e17598d97468d3dde5";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    rskTestnet: {
      url: "https://rpc.testnet.rootstock.io/ELFGXusdke6MEv0rntHjKMxfVTG1w9-T",
      chainId: 31,
      gasPrice: 60000000,
      accounts: [PRIVATE_KEY],
    },
  },
  sourcify: {
    enabled: false,
  },
  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      rskTestnet: "RSK_TESTNET_RPC_URL",
      rskMainnet: "RSK_MAINNET_RPC_URL",
    },
    customChains: [
      {
        network: "rskTestnet",
        chainId: 31,
        urls: {
          apiURL: "https://rootstock-testnet.blockscout.com/api/",
          browserURL: "https://rootstock-testnet.blockscout.com/",
        },
      },
      {
        network: "rskMainnet",
        chainId: 30,
        urls: {
          apiURL: "https://rootstock.blockscout.com/api/",
          browserURL: "https://rootstock.blockscout.com/",
        },
      },
    ],
  },
};

export default config;
