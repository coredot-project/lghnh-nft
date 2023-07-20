/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CrossChainEnabledArbitrumL2Mock } from "../CrossChainEnabledArbitrumL2Mock";

export class CrossChainEnabledArbitrumL2Mock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CrossChainEnabledArbitrumL2Mock> {
    return super.deploy(
      overrides || {}
    ) as Promise<CrossChainEnabledArbitrumL2Mock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CrossChainEnabledArbitrumL2Mock {
    return super.attach(address) as CrossChainEnabledArbitrumL2Mock;
  }
  connect(signer: Signer): CrossChainEnabledArbitrumL2Mock__factory {
    return super.connect(signer) as CrossChainEnabledArbitrumL2Mock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainEnabledArbitrumL2Mock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainEnabledArbitrumL2Mock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "actual",
        type: "address",
      },
      {
        internalType: "address",
        name: "expected",
        type: "address",
      },
    ],
    name: "InvalidCrossChainSender",
    type: "error",
  },
  {
    inputs: [],
    name: "NotCrossChainCall",
    type: "error",
  },
  {
    inputs: [],
    name: "crossChainOwnerRestricted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crossChainRestricted",
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
];

const _bytecode =
  "0x60a06040523373ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b506080516105336100646000396000818160ba015260de01526105336000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80634b074af5146100465780638da5cb5b14610050578063f97f51891461006e575b600080fd5b61004e610078565b005b6100586100b8565b60405161006591906103f6565b60405180910390f35b6100766100dc565b005b61008061017f565b6100b6576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f00000000000000000000000000000000000000000000000000000000000000006000610107610190565b90508073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161461017b5780826040517fef25d32b000000000000000000000000000000000000000000000000000000008152600401610172929190610411565b60405180910390fd5b5050565b600061018b60646101df565b905090565b600061019a61017f565b6101d0576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101da6064610266565b905090565b60008173ffffffffffffffffffffffffffffffffffffffff166308bd624c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561022757600080fd5b505afa15801561023b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025f9190610477565b9050919050565b6000610271826101df565b6102a7576040517f4a74df9200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663175a260b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102ed57600080fd5b505afa158015610301573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103259190610477565b61032f57336103ae565b8173ffffffffffffffffffffffffffffffffffffffff1663d74523b36040518163ffffffff1660e01b815260040160206040518083038186803b15801561037557600080fd5b505afa158015610389573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ad91906104d0565b5b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103e0826103b5565b9050919050565b6103f0816103d5565b82525050565b600060208201905061040b60008301846103e7565b92915050565b600060408201905061042660008301856103e7565b61043360208301846103e7565b9392505050565b600080fd5b60008115159050919050565b6104548161043f565b811461045f57600080fd5b50565b6000815190506104718161044b565b92915050565b60006020828403121561048d5761048c61043a565b5b600061049b84828501610462565b91505092915050565b6104ad816103d5565b81146104b857600080fd5b50565b6000815190506104ca816104a4565b92915050565b6000602082840312156104e6576104e561043a565b5b60006104f4848285016104bb565b9150509291505056fea2646970667358221220f3e7f97ff8e29c3705e15af019909f942b058a5854c304bc17f497c8821f308b64736f6c63430008090033";
