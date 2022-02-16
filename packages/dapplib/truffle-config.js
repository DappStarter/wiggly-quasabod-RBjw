require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name reward stereo common gesture beach suit genuine'; 
let testAccounts = [
"0x422ab65ffb83bd473ca71bbb980c9f185aff4908ff9ae4b32ac3d75825416ffd",
"0x6243ac3eb4efc04f1cbd71db41863442a9f06e671b69ef186b7b988068e3dd4c",
"0xf5544393c851130cacfee691102f50ff0580b3cbf73643536184b58ac0d9a540",
"0x8a0bba57c65918ac65a1231c4bf4fb75a90b3b744731efbd6f5ed00c2a502862",
"0x8b477c7b066f9537ee31872a5d424f39f7e697880a13468095e6accd5859f03b",
"0x59ea87156c4695740b3c0fac3a40ff281fc0b98103c65522e1ef54825102923e",
"0x9acf4bc4ee7a62c3478df7138c29be061faccc50b507551033fae123c2312375",
"0xb407cadf77f7c8f4efda666b9bf730d3bc8fa74bdbbb8aa924d0ea65d00048e6",
"0x14cfa5140503ebdb2ad0f059b495627c78e36a8893e59c4ceea89865f3e65ba6",
"0x936b293f352f487c1903c70665d96c0b872b20b240e3f0c07220806a3be8e350"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


