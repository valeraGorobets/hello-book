import web3 from './web3';

const address = '0x88546fc395186bbdb84052bd7a5776648118e58b';
const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "account",
                "type": "address"
            },
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TransferFee",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    }
];
export default new web3.eth.Contract(abi, address);
