require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid enroll frame short fan rescue noise huge imitate private frame general'; 
let testAccounts = [
"0xfbe1aae5a04e92e427b96125a1f4ac093a6f4400eebeaedb74e51b2578c20413",
"0x14a5b63ffc7051dc8ec4ee21e1daffcb6336b9faecc3b15d4068e46439e0e9df",
"0x42d2e0665f8b0e2c4fb5d0af27b87de27c292080cfd9c71bd8ea3871d6b45776",
"0xaf123332400928047de93ba0fa04e1342ea2ee173660baa345c01a98dc853bc0",
"0xaa29394f33ff2a6e63eccf1c49883157a9227e771bdf2f01bfbf82ab7deff364",
"0xa8c550aa8c8a3b90ab8f795ce803677382e9e60418fb06d132c140ee6eda55f4",
"0x2f0e7e69abeb6e3313fa1efd54eee2966ce5295209cef392d60c5a30f43e3229",
"0xbe4a7784f1b75d16fb687cebd540b23cd82d5bdac8749709bfdb88dee087d465",
"0x3d8ddb2099b2b3f92a6e3e6c31104f86b8c881a432aebbe98db9e6820738177a",
"0x7e48b742041a6b6638ae69ad91dd9189c06b1a079416d83e9a3f46df3099e5c0"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


