/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BridgeArbitrumL1Outbox } from "../BridgeArbitrumL1Outbox";

export class BridgeArbitrumL1Outbox__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BridgeArbitrumL1Outbox> {
    return super.deploy(overrides || {}) as Promise<BridgeArbitrumL1Outbox>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BridgeArbitrumL1Outbox {
    return super.attach(address) as BridgeArbitrumL1Outbox;
  }
  connect(signer: Signer): BridgeArbitrumL1Outbox__factory {
    return super.connect(signer) as BridgeArbitrumL1Outbox__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeArbitrumL1Outbox {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BridgeArbitrumL1Outbox;
  }
}

const _abi = [
  {
    inputs: [],
    name: "bridge",
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
    name: "l2ToL1Sender",
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
  "0x60a06040523373ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff1681525034801561004357600080fd5b5060805161023061006560003960008181607b015261011e01526102306000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806380648b021461003b578063e78cea9214610059575b600080fd5b610043610077565b6040516100509190610181565b60405180910390f35b61006161011c565b60405161006e9190610181565b60405180910390f35b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370348f3e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156100df57600080fd5b505afa1580156100f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011791906101cd565b905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061016b82610140565b9050919050565b61017b81610160565b82525050565b60006020820190506101966000830184610172565b92915050565b600080fd5b6101aa81610160565b81146101b557600080fd5b50565b6000815190506101c7816101a1565b92915050565b6000602082840312156101e3576101e261019c565b5b60006101f1848285016101b8565b9150509291505056fea264697066735822122000df13588cc0f669572d214c170fe3311712a76916d5e062bbb1a147142821c764736f6c63430008090033";
