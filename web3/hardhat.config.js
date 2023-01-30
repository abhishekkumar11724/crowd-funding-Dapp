/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: "goerli",
    networks: {
      hardhat: {},
      goerli: {
        url: 'https://rpc.ankr.com/eth_goerli',
        accounts: [ `0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};


// https://rpc.ankr.com/eth_goerli/0c65f525249b7a0ce072e955abef7829d67df00c670232223d118326ba21d53c