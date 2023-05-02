require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.0",
  networks: {
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_POLYGONSCAN_KEY,
  },
};