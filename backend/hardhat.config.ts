import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY = "6690381cdaaa3a9ef0ae3b8dd65748876883263dd204c98c2267162ae64cd8b2"

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    rskTestnet: {
      url: "https://rpc.testnet.rootstock.io/VkCcVhYQf8qGMha7ILi51OXpNnvcE-T",
      chainId: 31,
      gasPrice: 60000000,
      accounts: [PRIVATE_KEY]
    }
  },
  sourcify: {
    enabled: false
  },
  etherscan: {
    apiKey: {
      rskTestnet: "RSK_TESTNET_RPC_URL"
    },
    customChains: [
      {
        network: "rskTestnet",
        chainId: 31,
        urls: {
          apiURL: "https://rootstock-testnet.blockscout.com/api/",
          browserURL: "https://rootstock-testnet.blockscout.com/",
        }
      }
    ]
  }
};

export default config;
