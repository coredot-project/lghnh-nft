/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Escrow } from "../Escrow";

export class Escrow__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Escrow> {
    return super.deploy(overrides || {}) as Promise<Escrow>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Escrow {
    return super.attach(address) as Escrow;
  }
  connect(signer: Signer): Escrow__factory {
    return super.connect(signer) as Escrow__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
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
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payee",
        type: "address",
      },
    ],
    name: "depositsOf",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address payable",
        name: "payee",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610ab78061010d6000396000f3fe6080604052600436106100555760003560e01c806351cff8d91461005a578063715018a6146100835780638da5cb5b1461009a578063e3a9db1a146100c5578063f2fde38b14610102578063f340fa011461012b575b600080fd5b34801561006657600080fd5b50610081600480360381019061007c91906106b3565b610147565b005b34801561008f57600080fd5b50610098610253565b005b3480156100a657600080fd5b506100af610267565b6040516100bc9190610701565b60405180910390f35b3480156100d157600080fd5b506100ec60048036038101906100e79190610748565b610290565b6040516100f9919061078e565b60405180910390f35b34801561010e57600080fd5b5061012960048036038101906101249190610748565b6102d9565b005b61014560048036038101906101409190610748565b61035d565b005b61014f610412565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610201818373ffffffffffffffffffffffffffffffffffffffff1661049090919063ffffffff16565b8173ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d582604051610247919061078e565b60405180910390a25050565b61025b610412565b6102656000610584565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6102e1610412565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610351576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103489061082c565b60405180910390fd5b61035a81610584565b50565b610365610412565b600034905080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546103b9919061087b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c482604051610406919061078e565b60405180910390a25050565b61041a610648565b73ffffffffffffffffffffffffffffffffffffffff16610438610267565b73ffffffffffffffffffffffffffffffffffffffff161461048e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104859061091d565b60405180910390fd5b565b804710156104d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ca90610989565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516104f9906109da565b60006040518083038185875af1925050503d8060008114610536576040519150601f19603f3d011682016040523d82523d6000602084013e61053b565b606091505b505090508061057f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057690610a61565b60405180910390fd5b505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061068082610655565b9050919050565b61069081610675565b811461069b57600080fd5b50565b6000813590506106ad81610687565b92915050565b6000602082840312156106c9576106c8610650565b5b60006106d78482850161069e565b91505092915050565b60006106eb82610655565b9050919050565b6106fb816106e0565b82525050565b600060208201905061071660008301846106f2565b92915050565b610725816106e0565b811461073057600080fd5b50565b6000813590506107428161071c565b92915050565b60006020828403121561075e5761075d610650565b5b600061076c84828501610733565b91505092915050565b6000819050919050565b61078881610775565b82525050565b60006020820190506107a3600083018461077f565b92915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006108166026836107a9565b9150610821826107ba565b604082019050919050565b6000602082019050818103600083015261084581610809565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061088682610775565b915061089183610775565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156108c6576108c561084c565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006109076020836107a9565b9150610912826108d1565b602082019050919050565b60006020820190508181036000830152610936816108fa565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e6365000000600082015250565b6000610973601d836107a9565b915061097e8261093d565b602082019050919050565b600060208201905081810360008301526109a281610966565b9050919050565b600081905092915050565b50565b60006109c46000836109a9565b91506109cf826109b4565b600082019050919050565b60006109e5826109b7565b9150819050919050565b7f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260008201527f6563697069656e74206d61792068617665207265766572746564000000000000602082015250565b6000610a4b603a836107a9565b9150610a56826109ef565b604082019050919050565b60006020820190508181036000830152610a7a81610a3e565b905091905056fea264697066735822122074cd93359d2a2a24653226d0936366df07154d44cb01161fa1d0cf9fac3566fa64736f6c63430008090033";