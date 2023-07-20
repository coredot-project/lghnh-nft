/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PausableMock } from "../PausableMock";

export class PausableMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PausableMock> {
    return super.deploy(overrides || {}) as Promise<PausableMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PausableMock {
    return super.attach(address) as PausableMock;
  }
  connect(signer: Signer): PausableMock__factory {
    return super.connect(signer) as PausableMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PausableMock {
    return new Contract(address, _abi, signerOrProvider) as PausableMock;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    ],
    name: "Paused",
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
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
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
    name: "drasticMeasure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "drasticMeasureTaken",
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
    name: "normalProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060008060006101000a81548160ff02191690831515021790555060008060016101000a81548160ff021916908315150217905550600060018190555061054a8061005c6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806376657b8e1161005b57806376657b8e146100c85780638456cb59146100e65780639958f045146100f0578063e7651d7a146100fa5761007d565b806306661abd146100825780633f4ba83a146100a05780635c975abb146100aa575b600080fd5b61008a610104565b6040516100979190610306565b60405180910390f35b6100a861010a565b005b6100b2610114565b6040516100bf919061033c565b60405180910390f35b6100d061012a565b6040516100dd919061033c565b60405180910390f35b6100ee61013d565b005b6100f8610147565b005b61010261016c565b005b60015481565b61011261018e565b565b60008060009054906101000a900460ff16905090565b600060019054906101000a900460ff1681565b6101456101f0565b565b61014f610252565b6001600060016101000a81548160ff021916908315150217905550565b61017461029b565b6001600081548092919061018790610386565b9190505550565b610196610252565b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6101d96102e5565b6040516101e69190610410565b60405180910390a1565b6101f861029b565b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861023b6102e5565b6040516102489190610410565b60405180910390a1565b61025a610114565b610299576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029090610488565b60405180910390fd5b565b6102a3610114565b156102e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102da906104f4565b60405180910390fd5b565b600033905090565b6000819050919050565b610300816102ed565b82525050565b600060208201905061031b60008301846102f7565b92915050565b60008115159050919050565b61033681610321565b82525050565b6000602082019050610351600083018461032d565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610391826102ed565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156103c4576103c3610357565b5b600182019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103fa826103cf565b9050919050565b61040a816103ef565b82525050565b60006020820190506104256000830184610401565b92915050565b600082825260208201905092915050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b600061047260148361042b565b915061047d8261043c565b602082019050919050565b600060208201905081810360008301526104a181610465565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b60006104de60108361042b565b91506104e9826104a8565b602082019050919050565b6000602082019050818103600083015261050d816104d1565b905091905056fea2646970667358221220f9dcdd58fa2801e77cbc0dfe8d2a0c1c44991140d1208bd2b99f8bc90a12cba664736f6c63430008090033";
