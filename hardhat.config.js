
require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337 // We set 1337 to make interacting with MetaMask simpler
    },
    goreli: {
      chainId: 5,
      url: "https://quiet-wild-tent.ethereum-goerli.discover.quiknode.pro/018d19bfda7792655e6705606fb07f32472264dc/",
      accounts: [
        "549ba6e02bef53dc4c75a17f887814ca45994251c41a9e97e4db9944ee8cf685",
        "e2b2d3ba1060c07f2c80434b41d8ca22b4f871b4af2e243e54f33fd0ce13eac4"
      ],
    }
  }
};