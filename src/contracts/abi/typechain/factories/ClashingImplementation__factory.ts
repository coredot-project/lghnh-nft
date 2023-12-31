/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ClashingImplementation } from "../ClashingImplementation";

export class ClashingImplementation__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ClashingImplementation> {
    return super.deploy(overrides || {}) as Promise<ClashingImplementation>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ClashingImplementation {
    return super.attach(address) as ClashingImplementation;
  }
  connect(signer: Signer): ClashingImplementation__factory {
    return super.connect(signer) as ClashingImplementation__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClashingImplementation {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ClashingImplementation;
  }
}

const _abi = [
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "delegatedFunction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610154806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063abf8e0e71461003b578063f851a44014610059575b600080fd5b610043610077565b60405161005091906100a7565b60405180910390f35b610061610080565b60405161006e9190610103565b60405180910390f35b60006001905090565b60006311111142905090565b60008115159050919050565b6100a18161008c565b82525050565b60006020820190506100bc6000830184610098565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100ed826100c2565b9050919050565b6100fd816100e2565b82525050565b600060208201905061011860008301846100f4565b9291505056fea264697066735822122088063eff6017d213bc1c54ef401dba17ca7b9d2d6810e0e53bff4511f666dcb164736f6c63430008090033";
