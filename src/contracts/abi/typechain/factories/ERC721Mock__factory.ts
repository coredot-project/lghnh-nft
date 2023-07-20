/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721Mock } from "../ERC721Mock";

export class ERC721Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<ERC721Mock> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC721Mock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC721Mock {
    return super.attach(address) as ERC721Mock;
  }
  connect(signer: Signer): ERC721Mock__factory {
    return super.connect(signer) as ERC721Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC721Mock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002bc838038062002bc88339818101604052810190620000379190620002c2565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b5050505050620003ac565b828054620000839062000376565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018e8262000143565b810181811067ffffffffffffffff82111715620001b057620001af62000154565b5b80604052505050565b6000620001c562000125565b9050620001d3828262000183565b919050565b600067ffffffffffffffff821115620001f657620001f562000154565b5b620002018262000143565b9050602081019050919050565b60005b838110156200022e57808201518184015260208101905062000211565b838111156200023e576000848401525b50505050565b60006200025b6200025584620001d8565b620001b9565b9050828152602081018484840111156200027a57620002796200013e565b5b620002878482856200020e565b509392505050565b600082601f830112620002a757620002a662000139565b5b8151620002b984826020860162000244565b91505092915050565b60008060408385031215620002dc57620002db6200012f565b5b600083015167ffffffffffffffff811115620002fd57620002fc62000134565b5b6200030b858286016200028f565b925050602083015167ffffffffffffffff8111156200032f576200032e62000134565b5b6200033d858286016200028f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038f57607f821691505b60208210811415620003a657620003a562000347565b5b50919050565b61280c80620003bc6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063a144819411610071578063a144819414610318578063a22cb46514610334578063b88d4fde14610350578063c87b56dd1461036c578063e985e9c51461039c57610121565b80636352211e146102605780636c0360eb1461029057806370a08231146102ae5780638832e6e3146102de57806395d89b41146102fa57610121565b806323b872dd116100f457806323b872dd146101c057806340c10f19146101dc57806342842e0e146101f857806342966c68146102145780634f558e791461023057610121565b806301ffc9a71461012657806306fdde0314610156578063081812fc14610174578063095ea7b3146101a4575b600080fd5b610140600480360381019061013b91906118fc565b6103cc565b60405161014d9190611944565b60405180910390f35b61015e6104ae565b60405161016b91906119f8565b60405180910390f35b61018e60048036038101906101899190611a50565b610540565b60405161019b9190611abe565b60405180910390f35b6101be60048036038101906101b99190611b05565b610586565b005b6101da60048036038101906101d59190611b45565b61069e565b005b6101f660048036038101906101f19190611b05565b6106fe565b005b610212600480360381019061020d9190611b45565b61070c565b005b61022e60048036038101906102299190611a50565b61072c565b005b61024a60048036038101906102459190611a50565b610738565b6040516102579190611944565b60405180910390f35b61027a60048036038101906102759190611a50565b61074a565b6040516102879190611abe565b60405180910390f35b6102986107fc565b6040516102a591906119f8565b60405180910390f35b6102c860048036038101906102c39190611b98565b61080b565b6040516102d59190611bd4565b60405180910390f35b6102f860048036038101906102f39190611d24565b6108c3565b005b6103026108d3565b60405161030f91906119f8565b60405180910390f35b610332600480360381019061032d9190611b05565b610965565b005b61034e60048036038101906103499190611dbf565b610973565b005b61036a60048036038101906103659190611dff565b610989565b005b61038660048036038101906103819190611a50565b6109eb565b60405161039391906119f8565b60405180910390f35b6103b660048036038101906103b19190611e82565b610a53565b6040516103c39190611944565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061049757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104a757506104a682610ae7565b5b9050919050565b6060600080546104bd90611ef1565b80601f01602080910402602001604051908101604052809291908181526020018280546104e990611ef1565b80156105365780601f1061050b57610100808354040283529160200191610536565b820191906000526020600020905b81548152906001019060200180831161051957829003601f168201915b5050505050905090565b600061054b82610b51565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105918261074a565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610602576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f990611f95565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610621610b9c565b73ffffffffffffffffffffffffffffffffffffffff161480610650575061064f8161064a610b9c565b610a53565b5b61068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068690612027565b60405180910390fd5b6106998383610ba4565b505050565b6106af6106a9610b9c565b82610c5d565b6106ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e5906120b9565b60405180910390fd5b6106f9838383610cf2565b505050565b6107088282610f84565b5050565b61072783838360405180602001604052806000815250610989565b505050565b6107358161115e565b50565b6000610743826112a6565b9050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea90612125565b60405180910390fd5b80915050919050565b6060610806611312565b905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561087c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610873906121b7565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6108ce838383611329565b505050565b6060600180546108e290611ef1565b80601f016020809104026020016040519081016040528092919081815260200182805461090e90611ef1565b801561095b5780601f106109305761010080835404028352916020019161095b565b820191906000526020600020905b81548152906001019060200180831161093e57829003601f168201915b5050505050905090565b61096f8282611384565b5050565b61098561097e610b9c565b83836113a2565b5050565b61099a610994610b9c565b83610c5d565b6109d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d0906120b9565b60405180910390fd5b6109e58484848461150f565b50505050565b60606109f682610b51565b6000610a00611312565b90506000815111610a205760405180602001604052806000815250610a4b565b80610a2a8461156b565b604051602001610a3b929190612213565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610b5a816112a6565b610b99576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9090612125565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c178361074a565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c698361074a565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610cab5750610caa8185610a53565b5b80610ce957508373ffffffffffffffffffffffffffffffffffffffff16610cd184610540565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d128261074a565b73ffffffffffffffffffffffffffffffffffffffff1614610d68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5f906122a9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610dd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dcf9061233b565b60405180910390fd5b610de38383836116cc565b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e69919061238a565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ec091906123be565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610f7f8383836116d1565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ff4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610feb90612460565b60405180910390fd5b610ffd816112a6565b1561103d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611034906124cc565b60405180910390fd5b611049600083836116cc565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461109991906123be565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461115a600083836116d1565b5050565b60006111698261074a565b9050611177816000846116cc565b6004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546111fd919061238a565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46112a2816000846116d1565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b606060405180602001604052806000815250905090565b6113338383610f84565b61134060008484846116d6565b61137f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113769061255e565b60405180910390fd5b505050565b61139e828260405180602001604052806000815250611329565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611411576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611408906125ca565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516115029190611944565b60405180910390a3505050565b61151a848484610cf2565b611526848484846116d6565b611565576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155c9061255e565b60405180910390fd5b50505050565b606060008214156115b3576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506116c7565b600082905060005b600082146115e55780806115ce906125ea565b915050600a826115de9190612662565b91506115bb565b60008167ffffffffffffffff81111561160157611600611bf9565b5b6040519080825280601f01601f1916602001820160405280156116335781602001600182028036833780820191505090505b5090505b600085146116c05760018261164c919061238a565b9150600a8561165b9190612693565b603061166791906123be565b60f81b81838151811061167d5761167c6126c4565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856116b99190612662565b9450611637565b8093505050505b919050565b505050565b505050565b60006116f78473ffffffffffffffffffffffffffffffffffffffff1661186d565b15611860578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611720610b9c565b8786866040518563ffffffff1660e01b81526004016117429493929190612748565b602060405180830381600087803b15801561175c57600080fd5b505af192505050801561178d57506040513d601f19601f8201168201806040525081019061178a91906127a9565b60015b611810573d80600081146117bd576040519150601f19603f3d011682016040523d82523d6000602084013e6117c2565b606091505b50600081511415611808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ff9061255e565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611865565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118d9816118a4565b81146118e457600080fd5b50565b6000813590506118f6816118d0565b92915050565b6000602082840312156119125761191161189a565b5b6000611920848285016118e7565b91505092915050565b60008115159050919050565b61193e81611929565b82525050565b60006020820190506119596000830184611935565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561199957808201518184015260208101905061197e565b838111156119a8576000848401525b50505050565b6000601f19601f8301169050919050565b60006119ca8261195f565b6119d4818561196a565b93506119e481856020860161197b565b6119ed816119ae565b840191505092915050565b60006020820190508181036000830152611a1281846119bf565b905092915050565b6000819050919050565b611a2d81611a1a565b8114611a3857600080fd5b50565b600081359050611a4a81611a24565b92915050565b600060208284031215611a6657611a6561189a565b5b6000611a7484828501611a3b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611aa882611a7d565b9050919050565b611ab881611a9d565b82525050565b6000602082019050611ad36000830184611aaf565b92915050565b611ae281611a9d565b8114611aed57600080fd5b50565b600081359050611aff81611ad9565b92915050565b60008060408385031215611b1c57611b1b61189a565b5b6000611b2a85828601611af0565b9250506020611b3b85828601611a3b565b9150509250929050565b600080600060608486031215611b5e57611b5d61189a565b5b6000611b6c86828701611af0565b9350506020611b7d86828701611af0565b9250506040611b8e86828701611a3b565b9150509250925092565b600060208284031215611bae57611bad61189a565b5b6000611bbc84828501611af0565b91505092915050565b611bce81611a1a565b82525050565b6000602082019050611be96000830184611bc5565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611c31826119ae565b810181811067ffffffffffffffff82111715611c5057611c4f611bf9565b5b80604052505050565b6000611c63611890565b9050611c6f8282611c28565b919050565b600067ffffffffffffffff821115611c8f57611c8e611bf9565b5b611c98826119ae565b9050602081019050919050565b82818337600083830152505050565b6000611cc7611cc284611c74565b611c59565b905082815260208101848484011115611ce357611ce2611bf4565b5b611cee848285611ca5565b509392505050565b600082601f830112611d0b57611d0a611bef565b5b8135611d1b848260208601611cb4565b91505092915050565b600080600060608486031215611d3d57611d3c61189a565b5b6000611d4b86828701611af0565b9350506020611d5c86828701611a3b565b925050604084013567ffffffffffffffff811115611d7d57611d7c61189f565b5b611d8986828701611cf6565b9150509250925092565b611d9c81611929565b8114611da757600080fd5b50565b600081359050611db981611d93565b92915050565b60008060408385031215611dd657611dd561189a565b5b6000611de485828601611af0565b9250506020611df585828601611daa565b9150509250929050565b60008060008060808587031215611e1957611e1861189a565b5b6000611e2787828801611af0565b9450506020611e3887828801611af0565b9350506040611e4987828801611a3b565b925050606085013567ffffffffffffffff811115611e6a57611e6961189f565b5b611e7687828801611cf6565b91505092959194509250565b60008060408385031215611e9957611e9861189a565b5b6000611ea785828601611af0565b9250506020611eb885828601611af0565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611f0957607f821691505b60208210811415611f1d57611f1c611ec2565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611f7f60218361196a565b9150611f8a82611f23565b604082019050919050565b60006020820190508181036000830152611fae81611f72565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612011603e8361196a565b915061201c82611fb5565b604082019050919050565b6000602082019050818103600083015261204081612004565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006120a3602e8361196a565b91506120ae82612047565b604082019050919050565b600060208201905081810360008301526120d281612096565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061210f60188361196a565b915061211a826120d9565b602082019050919050565b6000602082019050818103600083015261213e81612102565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006121a160298361196a565b91506121ac82612145565b604082019050919050565b600060208201905081810360008301526121d081612194565b9050919050565b600081905092915050565b60006121ed8261195f565b6121f781856121d7565b935061220781856020860161197b565b80840191505092915050565b600061221f82856121e2565b915061222b82846121e2565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061229360258361196a565b915061229e82612237565b604082019050919050565b600060208201905081810360008301526122c281612286565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061232560248361196a565b9150612330826122c9565b604082019050919050565b6000602082019050818103600083015261235481612318565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061239582611a1a565b91506123a083611a1a565b9250828210156123b3576123b261235b565b5b828203905092915050565b60006123c982611a1a565b91506123d483611a1a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156124095761240861235b565b5b828201905092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061244a60208361196a565b915061245582612414565b602082019050919050565b600060208201905081810360008301526124798161243d565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006124b6601c8361196a565b91506124c182612480565b602082019050919050565b600060208201905081810360008301526124e5816124a9565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061254860328361196a565b9150612553826124ec565b604082019050919050565b600060208201905081810360008301526125778161253b565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006125b460198361196a565b91506125bf8261257e565b602082019050919050565b600060208201905081810360008301526125e3816125a7565b9050919050565b60006125f582611a1a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156126285761262761235b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061266d82611a1a565b915061267883611a1a565b92508261268857612687612633565b5b828204905092915050565b600061269e82611a1a565b91506126a983611a1a565b9250826126b9576126b8612633565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061271a826126f3565b61272481856126fe565b935061273481856020860161197b565b61273d816119ae565b840191505092915050565b600060808201905061275d6000830187611aaf565b61276a6020830186611aaf565b6127776040830185611bc5565b8181036060830152612789818461270f565b905095945050505050565b6000815190506127a3816118d0565b92915050565b6000602082840312156127bf576127be61189a565b5b60006127cd84828501612794565b9150509291505056fea26469706673582212201d29765492dcf3b00df88f5771e80d1ad2a2324db04a341e644cdd23522161f164736f6c63430008090033";