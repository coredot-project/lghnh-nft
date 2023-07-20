/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DrGrootMinter } from "../DrGrootMinter";

export class DrGrootMinter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _drgroot: string,
    _feeTo: string,
    overrides?: Overrides
  ): Promise<DrGrootMinter> {
    return super.deploy(
      _drgroot,
      _feeTo,
      overrides || {}
    ) as Promise<DrGrootMinter>;
  }
  getDeployTransaction(
    _drgroot: string,
    _feeTo: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_drgroot, _feeTo, overrides || {});
  }
  attach(address: string): DrGrootMinter {
    return super.attach(address) as DrGrootMinter;
  }
  connect(signer: Signer): DrGrootMinter__factory {
    return super.connect(signer) as DrGrootMinter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DrGrootMinter {
    return new Contract(address, _abi, signerOrProvider) as DrGrootMinter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract DrGroot",
        name: "_drgroot",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_feeTo",
        type: "address",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "SetBlacklist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address payable",
        name: "feeTo",
        type: "address",
      },
    ],
    name: "SetFeeTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "SetMaxSellNumber",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "SetPublicPrice",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "SetTxLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "wallet",
        type: "address[]",
      },
    ],
    name: "SetWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "SetWhitelistPrice",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "drgroot",
    outputs: [
      {
        internalType: "contract DrGroot",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
    outputs: [
      {
        internalType: "address payable",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
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
        name: "_wallet",
        type: "address",
      },
    ],
    name: "isWhitelist",
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
    name: "maxSellNumber",
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
    inputs: [
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mintByKlay",
    outputs: [],
    stateMutability: "payable",
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
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "mintByWon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "publicPrice",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sellCount",
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
    inputs: [
      {
        internalType: "address payable",
        name: "_feeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    name: "setMaxSellNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setPublicPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "setTxLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_wallet",
        type: "address[]",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setWhitelistPrice",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "txLimit",
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
    name: "whitelistPrice",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelists",
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
];

const _bytecode =
  "0x60806040526107d0600355600a600455600060055568042c96f409591400006006556804d31f847531c400006007553480156200003b57600080fd5b50604051620031893803806200318983398181016040528101906200006191906200067e565b62000081620000756200013f60201b60201c565b6200014760201b60201c565b620000b37ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9806200020b60201b60201c565b620000e57ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9336200026f60201b60201c565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000137816200028560201b60201c565b50506200080e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006200021e836200038560201b60201c565b90508160016000858152602001908152602001600020600101819055508181847fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff60405160405180910390a4505050565b620002818282620003a560201b60201c565b5050565b620002956200049660201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000308576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002ff906200074c565b60405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff6b59ffc88fbb27f33470b919e00b41139ee340eb349521f0cbbc1504ce29c3e816040516200037a91906200077f565b60405180910390a150565b600060016000838152602001908152602001600020600101549050919050565b620003b782826200052760201b60201c565b6200049257600180600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620004376200013f60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b620004a66200013f60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620004cc6200059260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000525576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200051c90620007ec565b60405180910390fd5b565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620005ed82620005c0565b9050919050565b60006200060182620005e0565b9050919050565b6200061381620005f4565b81146200061f57600080fd5b50565b600081519050620006338162000608565b92915050565b60006200064682620005c0565b9050919050565b620006588162000639565b81146200066457600080fd5b50565b60008151905062000678816200064d565b92915050565b60008060408385031215620006985762000697620005bb565b5b6000620006a88582860162000622565b9250506020620006bb8582860162000667565b9150509250929050565b600082825260208201905092915050565b7f726571756972653a2043616e27742061737369676e20666565746f20746f207a60008201527f65726f20616464726573732e0000000000000000000000000000000000000000602082015250565b600062000734602c83620006c5565b91506200074182620006d6565b604082019050919050565b60006020820190508181036000830152620007678162000725565b9050919050565b620007798162000639565b82525050565b60006020820190506200079660008301846200076e565b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620007d4602083620006c5565b9150620007e1826200079c565b602082019050919050565b600060208201905081810360008301526200080781620007c5565b9050919050565b61296b806200081e6000396000f3fe6080604052600436106101d85760003560e01c80638b001f4e11610102578063cfbd488511610095578063f421764811610064578063f421764814610699578063f46901ed146106c2578063fc1a1c36146106eb578063fe6d812414610716576101d8565b8063cfbd488514610602578063d547741f1461062b578063d5bc6c3914610654578063f2fde38b14610670576101d8565b8063a945bf80116100d1578063a945bf8014610534578063aa271e1a1461055f578063c62752551461059c578063c683630d146105c5576101d8565b80638b001f4e146104785780638da5cb5b146104a157806391d14854146104cc578063a217fddf14610509576101d8565b8063261707fa1161017a5780636caae832116101495780636caae832146103e2578063715018a61461040d578063717d57d3146104245780637bab83bd1461044d576101d8565b8063261707fa1461033e5780632f2ff15d1461036757806336568abe146103905780635c85974f146103b9576101d8565b80630c6b6737116101b65780630c6b67371461026e5780631d9f9c7b146102995780631e7be210146102c4578063248a9ca314610301576101d8565b8063017e7e58146101dd57806301ffc9a7146102085780630bc62dd914610245575b600080fd5b3480156101e957600080fd5b506101f2610741565b6040516101ff9190611a1e565b60405180910390f35b34801561021457600080fd5b5061022f600480360381019061022a9190611a9b565b610767565b60405161023c9190611ae3565b60405180910390f35b34801561025157600080fd5b5061026c60048036038101906102679190611b72565b6107e1565b005b34801561027a57600080fd5b506102836108fd565b6040516102909190611bc1565b60405180910390f35b3480156102a557600080fd5b506102ae610903565b6040516102bb9190611bc1565b60405180910390f35b3480156102d057600080fd5b506102eb60048036038101906102e69190611bdc565b610909565b6040516102f89190611ae3565b60405180910390f35b34801561030d57600080fd5b5061032860048036038101906103239190611c3f565b610929565b6040516103359190611c7b565b60405180910390f35b34801561034a57600080fd5b5061036560048036038101906103609190611bdc565b610949565b005b34801561037357600080fd5b5061038e60048036038101906103899190611c96565b610976565b005b34801561039c57600080fd5b506103b760048036038101906103b29190611c96565b610997565b005b3480156103c557600080fd5b506103e060048036038101906103db9190611cd6565b610a1a565b005b3480156103ee57600080fd5b506103f7610a86565b6040516104049190611bc1565b60405180910390f35b34801561041957600080fd5b50610422610a8c565b005b34801561043057600080fd5b5061044b60048036038101906104469190611cd6565b610aa0565b005b34801561045957600080fd5b50610462610b58565b60405161046f9190611d62565b60405180910390f35b34801561048457600080fd5b5061049f600480360381019061049a9190611cd6565b610b7e565b005b3480156104ad57600080fd5b506104b6610c2e565b6040516104c39190611d8c565b60405180910390f35b3480156104d857600080fd5b506104f360048036038101906104ee9190611c96565b610c57565b6040516105009190611ae3565b60405180910390f35b34801561051557600080fd5b5061051e610cc2565b60405161052b9190611c7b565b60405180910390f35b34801561054057600080fd5b50610549610cc9565b6040516105569190611bc1565b60405180910390f35b34801561056b57600080fd5b5061058660048036038101906105819190611bdc565b610ccf565b6040516105939190611ae3565b60405180910390f35b3480156105a857600080fd5b506105c360048036038101906105be9190611cd6565b610d02565b005b3480156105d157600080fd5b506105ec60048036038101906105e79190611bdc565b610dba565b6040516105f99190611ae3565b60405180910390f35b34801561060e57600080fd5b5061062960048036038101906106249190611bdc565b610e10565b005b34801561063757600080fd5b50610652600480360381019061064d9190611c96565b610e3d565b005b61066e60048036038101906106699190611cd6565b610e5e565b005b34801561067c57600080fd5b5061069760048036038101906106929190611bdc565b6110bb565b005b3480156106a557600080fd5b506106c060048036038101906106bb9190611e0c565b61113f565b005b3480156106ce57600080fd5b506106e960048036038101906106e49190611e85565b611248565b005b3480156106f757600080fd5b5061070061133b565b60405161070d9190611bc1565b60405180910390f35b34801561072257600080fd5b5061072b611341565b6040516107389190611c7b565b60405180910390f35b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806107da57506107d982611365565b5b9050919050565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc961080b816113cf565b600454821115610850576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084790611f0f565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1984846040518363ffffffff1660e01b81526004016108ad929190611f2f565b600060405180830381600087803b1580156108c757600080fd5b505af11580156108db573d6000803e3d6000fd5b5050505081600560008282546108f19190611f87565b92505081905550505050565b60055481565b60035481565b60096020528060005260406000206000915054906101000a900460ff1681565b600060016000838152602001908152602001600020600101549050919050565b6109737ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc982610976565b50565b61097f82610929565b610988816113cf565b61099283836113e3565b505050565b61099f6114c3565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a039061204f565b60405180910390fd5b610a1682826114cb565b5050565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9610a44816113cf565b816004819055507f0908917ea7a6e134d05135241f8d5a4eaa81dd074e9dd7f36cca8b5ea003bde182604051610a7a9190611bc1565b60405180910390a15050565b60045481565b610a946115ad565b610a9e600061162b565b565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9610aca816113cf565b81670de0b6b3a76400008111610b15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0c906120e1565b60405180910390fd5b826006819055507f666111fb050e78bb87dccd0cb31682328cb3a3ab33c44ac45cf3f3cbb3894fab83604051610b4b9190611bc1565b60405180910390a1505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9610ba8816113cf565b6005548211610bec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be390612199565b60405180910390fd5b816003819055507fd494b57c0aef5ff9508fae3a6f71098aad268c3b2ed5986f4d7c36836804edc082604051610c229190611bc1565b60405180910390a15050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000801b81565b60075481565b6000610cfb7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc983610c57565b9050919050565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9610d2c816113cf565b81670de0b6b3a76400008111610d77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6e906120e1565b60405180910390fd5b826007819055507fda25869ecc04491e922bb8c554c6ef8967b063207ae489515c67ace4e304b32783604051610dad9190611bc1565b60405180910390a1505050565b6000600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b610e3a7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc982610e3d565b50565b610e4682610929565b610e4f816113cf565b610e5983836114cb565b505050565b600454811115610ea3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9a90611f0f565b60405180910390fd5b60035481600554610eb49190611f87565b1115610ef5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eec9061222b565b60405180910390fd5b610efe33610dba565b15610f575780600654610f11919061224b565b3414610f52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f4990612317565b60405180910390fd5b610fa7565b80600754610f65919061224b565b3414610fa6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9d906123a9565b60405180910390fd5b5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401611004929190611f2f565b600060405180830381600087803b15801561101e57600080fd5b505af1158015611032573d6000803e3d6000fd5b50505050600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561109e573d6000803e3d6000fd5b5080600560008282546110b19190611f87565b9250508190555050565b6110c36115ad565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611133576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112a9061243b565b60405180910390fd5b61113c8161162b565b50565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc9611169816113cf565b60005b83839050811015611209576001600960008686858181106111905761118f61245b565b5b90506020020160208101906111a59190611bdc565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806112019061248a565b91505061116c565b507f9e2f9178fc8d13e471235cd2436a05702f2129bdca4484d848dceb936e168e14838360405161123b929190612596565b60405180910390a1505050565b6112506115ad565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b79061262c565b60405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff6b59ffc88fbb27f33470b919e00b41139ee340eb349521f0cbbc1504ce29c3e816040516113309190611a1e565b60405180910390a150565b60065481565b7ff0887ba65ee2024ea881d91b74c2450ef19e1557f03bed3ea9f16b037cbe2dc981565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6113e0816113db6114c3565b6116ef565b50565b6113ed8282610c57565b6114bf57600180600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506114646114c3565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b6114d58282610c57565b156115a95760006001600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061154e6114c3565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b6115b56114c3565b73ffffffffffffffffffffffffffffffffffffffff166115d3610c2e565b73ffffffffffffffffffffffffffffffffffffffff1614611629576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162090612698565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6116f98282610c57565b6117705761170681611774565b6117148360001c60206117a1565b6040516020016117259291906127ca565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611767919061284e565b60405180910390fd5b5050565b606061179a8273ffffffffffffffffffffffffffffffffffffffff16601460ff166117a1565b9050919050565b6060600060028360026117b4919061224b565b6117be9190611f87565b67ffffffffffffffff8111156117d7576117d6612870565b5b6040519080825280601f01601f1916602001820160405280156118095781602001600182028036833780820191505090505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106118415761184061245b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106118a5576118a461245b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026118e5919061224b565b6118ef9190611f87565b90505b600181111561198f577f3031323334353637383961626364656600000000000000000000000000000000600f8616601081106119315761193061245b565b5b1a60f81b8282815181106119485761194761245b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806119889061289f565b90506118f2565b50600084146119d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ca90612915565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a08826119dd565b9050919050565b611a18816119fd565b82525050565b6000602082019050611a336000830184611a0f565b92915050565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611a7881611a43565b8114611a8357600080fd5b50565b600081359050611a9581611a6f565b92915050565b600060208284031215611ab157611ab0611a39565b5b6000611abf84828501611a86565b91505092915050565b60008115159050919050565b611add81611ac8565b82525050565b6000602082019050611af86000830184611ad4565b92915050565b6000611b09826119dd565b9050919050565b611b1981611afe565b8114611b2457600080fd5b50565b600081359050611b3681611b10565b92915050565b6000819050919050565b611b4f81611b3c565b8114611b5a57600080fd5b50565b600081359050611b6c81611b46565b92915050565b60008060408385031215611b8957611b88611a39565b5b6000611b9785828601611b27565b9250506020611ba885828601611b5d565b9150509250929050565b611bbb81611b3c565b82525050565b6000602082019050611bd66000830184611bb2565b92915050565b600060208284031215611bf257611bf1611a39565b5b6000611c0084828501611b27565b91505092915050565b6000819050919050565b611c1c81611c09565b8114611c2757600080fd5b50565b600081359050611c3981611c13565b92915050565b600060208284031215611c5557611c54611a39565b5b6000611c6384828501611c2a565b91505092915050565b611c7581611c09565b82525050565b6000602082019050611c906000830184611c6c565b92915050565b60008060408385031215611cad57611cac611a39565b5b6000611cbb85828601611c2a565b9250506020611ccc85828601611b27565b9150509250929050565b600060208284031215611cec57611ceb611a39565b5b6000611cfa84828501611b5d565b91505092915050565b6000819050919050565b6000611d28611d23611d1e846119dd565b611d03565b6119dd565b9050919050565b6000611d3a82611d0d565b9050919050565b6000611d4c82611d2f565b9050919050565b611d5c81611d41565b82525050565b6000602082019050611d776000830184611d53565b92915050565b611d8681611afe565b82525050565b6000602082019050611da16000830184611d7d565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f840112611dcc57611dcb611da7565b5b8235905067ffffffffffffffff811115611de957611de8611dac565b5b602083019150836020820283011115611e0557611e04611db1565b5b9250929050565b60008060208385031215611e2357611e22611a39565b5b600083013567ffffffffffffffff811115611e4157611e40611a3e565b5b611e4d85828601611db6565b92509250509250929050565b611e62816119fd565b8114611e6d57600080fd5b50565b600081359050611e7f81611e59565b92915050565b600060208284031215611e9b57611e9a611a39565b5b6000611ea984828501611e70565b91505092915050565b600082825260208201905092915050565b7f726571756972653a2043616e277420657863656564207478206c696d69742e00600082015250565b6000611ef9601f83611eb2565b9150611f0482611ec3565b602082019050919050565b60006020820190508181036000830152611f2881611eec565b9050919050565b6000604082019050611f446000830185611d7d565b611f516020830184611bb2565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f9282611b3c565b9150611f9d83611b3c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611fd257611fd1611f58565b5b828201905092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000612039602f83611eb2565b915061204482611fdd565b604082019050919050565b600060208201905081810360008301526120688161202c565b9050919050565b7f726571756972653a2053657474696e672070726963652073686f756c6420626560008201527f207570706572207468616e2031204b6c61792e00000000000000000000000000602082015250565b60006120cb603383611eb2565b91506120d68261206f565b604082019050919050565b600060208201905081810360008301526120fa816120be565b9050919050565b7f726571756972653a2043616e27742061737369676e2073656c6c206e756d626560008201527f7220736d616c6c6572206f7220657175616c20746f20746f74616c207375707060208201527f6c792e0000000000000000000000000000000000000000000000000000000000604082015250565b6000612183604383611eb2565b915061218e82612101565b606082019050919050565b600060208201905081810360008301526121b281612176565b9050919050565b7f726571756972653a2043616e277420657863656564206d61782073656c6c206e60008201527f756d6265722e0000000000000000000000000000000000000000000000000000602082015250565b6000612215602683611eb2565b9150612220826121b9565b604082019050919050565b6000602082019050818103600083015261224481612208565b9050919050565b600061225682611b3c565b915061226183611b3c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561229a57612299611f58565b5b828202905092915050565b7f726571756972653a204e6f7420657175616c206d73672e76616c756520616e6460008201527f207768697465206c6973742070726963652e0000000000000000000000000000602082015250565b6000612301603283611eb2565b915061230c826122a5565b604082019050919050565b60006020820190508181036000830152612330816122f4565b9050919050565b7f726571756972653a204e6f7420657175616c206d73672e76616c756520616e6460008201527f207075626c69632070726963652e000000000000000000000000000000000000602082015250565b6000612393602e83611eb2565b915061239e82612337565b604082019050919050565b600060208201905081810360008301526123c281612386565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612425602683611eb2565b9150612430826123c9565b604082019050919050565b6000602082019050818103600083015261245481612418565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061249582611b3c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156124c8576124c7611f58565b5b600182019050919050565b600082825260208201905092915050565b6000819050919050565b6124f781611afe565b82525050565b600061250983836124ee565b60208301905092915050565b60006125246020840184611b27565b905092915050565b6000602082019050919050565b600061254583856124d3565b9350612550826124e4565b8060005b85811015612589576125668284612515565b61257088826124fd565b975061257b8361252c565b925050600181019050612554565b5085925050509392505050565b600060208201905081810360008301526125b1818486612539565b90509392505050565b7f726571756972653a2043616e27742061737369676e20666565746f20746f207a60008201527f65726f20616464726573732e0000000000000000000000000000000000000000602082015250565b6000612616602c83611eb2565b9150612621826125ba565b604082019050919050565b6000602082019050818103600083015261264581612609565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612682602083611eb2565b915061268d8261264c565b602082019050919050565b600060208201905081810360008301526126b181612675565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b60006126f96017836126b8565b9150612704826126c3565b601782019050919050565b600081519050919050565b60005b8381101561273857808201518184015260208101905061271d565b83811115612747576000848401525b50505050565b60006127588261270f565b61276281856126b8565b935061277281856020860161271a565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006127b46011836126b8565b91506127bf8261277e565b601182019050919050565b60006127d5826126ec565b91506127e1828561274d565b91506127ec826127a7565b91506127f8828461274d565b91508190509392505050565b6000601f19601f8301169050919050565b60006128208261270f565b61282a8185611eb2565b935061283a81856020860161271a565b61284381612804565b840191505092915050565b600060208201905081810360008301526128688184612815565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006128aa82611b3c565b915060008214156128be576128bd611f58565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b60006128ff602083611eb2565b915061290a826128c9565b602082019050919050565b6000602082019050818103600083015261292e816128f2565b905091905056fea26469706673582212206c5d60253960fbc39c735f98910d41abb8065acf92be2cf758caa17983c9c90364736f6c63430008090033";
