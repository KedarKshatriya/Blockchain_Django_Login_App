function abidata(){
    var abi = [
        {
          "constant": false,
          "inputs": [
            {
              "internalType": "string",
              "name": "_uId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_password",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_time",
              "type": "uint256"
            }
          ],
          "name": "accCreate",
          "outputs": [
            {
              "internalType": "bool",
              "name": "b",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "internalType": "string",
              "name": "_uId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_password",
              "type": "string"
            }
          ],
          "name": "accLogin",
          "outputs": [
            {
              "internalType": "bool",
              "name": "a",
              "type": "bool"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
        ];
    return abi;
}