require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    rskTestnet: {
      url: "https://rpc.testnet.rootstock.io/VkCcvVhYQf8qGMha7ILi51OXpNnvcE-T",
      chainId: 31,
      gasPrice: 60000000,
      accounts: ["c704b53e0c5328b274503fe551721674bb329b78af24451e54c77b26a4e54109"]
    }
  },
  sourcify: {
    enabled: false
  },
  etherscan: {
    apiKey: {
      // Is not required by blockscout. Can be any non-empty string
      rskTestnet: 'RSK_TESTNET_RPC_URL'
    },
    customChains: [
      {
        network: "rskTestnet",
        chainId: 31,
        urls: {
          apiURL: "https://rootstock-testnet.blockscout.com/api/",
          browserURL: "https://rootstock-testnet.blockscout.com/",
        }
      },
    ]
  },
};
