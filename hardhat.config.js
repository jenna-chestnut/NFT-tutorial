require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const {ropstenPrivateKey, etherscanAPI} = require('./secrets.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "ropsten",
networks: {
  hardhat: {
  },
  ropsten: {
    url: "https://ropsten.infura.io/v3/a77f5db8de144d1a991d95cc9805a319",
    accounts: [ropstenPrivateKey],
    gas: 4000000
  }
},
etherscan: {
  // Your API key for Etherscan
  // Obtain one at https://etherscan.io/
  apiKey: etherscanAPI,
  url: "https://ropsten.infura.io/v3/a77f5db8de144d1a991d95cc9805a319"
},
solidity: {
  version: "0.8.0"
},
paths: {
  sources: "./contracts",
  tests: "./test",
  cache: "./cache",
  artifacts: "./artifacts"
},
mocha: {
  timeout: 20000
}
};
