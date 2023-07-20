/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MerkleProofWrapper } from "../MerkleProofWrapper";

export class MerkleProofWrapper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MerkleProofWrapper> {
    return super.deploy(overrides || {}) as Promise<MerkleProofWrapper>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MerkleProofWrapper {
    return super.attach(address) as MerkleProofWrapper;
  }
  connect(signer: Signer): MerkleProofWrapper__factory {
    return super.connect(signer) as MerkleProofWrapper__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleProofWrapper {
    return new Contract(address, _abi, signerOrProvider) as MerkleProofWrapper;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proofs",
        type: "bytes32[]",
      },
      {
        internalType: "bool[]",
        name: "proofFlag",
        type: "bool[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "leaves",
        type: "bytes32[]",
      },
    ],
    name: "multiProofVerify",
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
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proofs",
        type: "bytes32[]",
      },
      {
        internalType: "bool[]",
        name: "proofFlag",
        type: "bool[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "leaves",
        type: "bytes32[]",
      },
    ],
    name: "multiProofVerifyCalldata",
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
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proofs",
        type: "bytes32[]",
      },
      {
        internalType: "bool[]",
        name: "proofFlag",
        type: "bool[]",
      },
      {
        internalType: "bytes32[]",
        name: "leaves",
        type: "bytes32[]",
      },
    ],
    name: "processMultiProof",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proofs",
        type: "bytes32[]",
      },
      {
        internalType: "bool[]",
        name: "proofFlag",
        type: "bool[]",
      },
      {
        internalType: "bytes32[]",
        name: "leaves",
        type: "bytes32[]",
      },
    ],
    name: "processMultiProofCalldata",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "processProof",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "processProofCalldata",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "verify",
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
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
    ],
    name: "verifyCalldata",
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
  "0x608060405234801561001057600080fd5b506113b1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637ffe9d8c1161005b5780637ffe9d8c1461014d578063862aac961461017d57806386333816146101ad578063ea5d3eb6146101dd57610088565b806332712d221461008d57806353b0f85f146100bd5780635a9a49c7146100ed57806362702a6b1461011d575b600080fd5b6100a760048036038101906100a29190610bd2565b61020d565b6040516100b49190610c92565b60405180910390f35b6100d760048036038101906100d29190610cad565b610227565b6040516100e49190610c92565b60405180910390f35b61010760048036038101906101029190610d0d565b61023d565b6040516101149190610d97565b60405180910390f35b61013760048036038101906101329190610db2565b610253565b6040516101449190610c92565b60405180910390f35b61016760048036038101906101629190610e0e565b610267565b6040516101749190610d97565b60405180910390f35b61019760048036038101906101929190610e82565b61027f565b6040516101a49190610d97565b60405180910390f35b6101c760048036038101906101c29190611034565b61029b565b6040516101d49190610d97565b60405180910390f35b6101f760048036038101906101f291906110ef565b6102b3565b6040516102049190610c92565b60405180910390f35b600061021c86868686866102c9565b905095945050505050565b6000610234848484610581565b90509392505050565b600061024a8484846105d9565b90509392505050565b600061025f83836105f0565b905092915050565b600061027585858585610646565b9050949350505050565b600061028f87878787878761065f565b90509695505050505050565b60006102a98585858561067c565b9050949350505050565b60006102c0848484610695565b90509392505050565b60008082519050600085859050905080600189899050846102ea91906111cf565b6102f49190611225565b14610334576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032b906112b6565b60405180910390fd5b60008167ffffffffffffffff8111156103505761034f610a5e565b5b60405190808252806020026020018201604052801561037e5781602001602082028036833780820191505090505b5090506000806000805b858110156104e45760008785106103c5578584806103a5906112d6565b9550815181106103b8576103b761131f565b5b60200260200101516103ed565b8985806103d1906112d6565b9650815181106103e4576103e361131f565b5b60200260200101515b905060008c8c848181106104045761040361131f565b5b9050602002016020810190610419919061134e565b610448578e8e858061042a906112d6565b965081811061043c5761043b61131f565b5b905060200201356104a4565b88861061047b5786858061045b906112d6565b96508151811061046e5761046d61131f565b5b60200260200101516104a3565b8a8680610487906112d6565b97508151811061049a5761049961131f565b5b60200260200101515b5b90506104b0828261093c565b8784815181106104c3576104c261131f565b5b602002602001018181525050505080806104dc906112d6565b915050610388565b50600085111561052257836001866104fc9190611225565b8151811061050d5761050c61131f565b5b60200260200101519650505050505050610578565b6000861115610554578760008151811061053f5761053e61131f565b5b60200260200101519650505050505050610578565b8b8b60008181106105685761056761131f565b5b9050602002013596505050505050505b95945050505050565b60008082905060005b858590508110156105cd576105b8828787848181106105ac576105ab61131f565b5b9050602002013561093c565b915080806105c5906112d6565b91505061058a565b50809150509392505050565b6000826105e685846105f0565b1490509392505050565b60008082905060005b845181101561063b57610626828683815181106106195761061861131f565b5b602002602001015161093c565b91508080610633906112d6565b9150506105f9565b508091505092915050565b600082610654868685610581565b149050949350505050565b60008261066f88888888876102c9565b1490509695505050505050565b60008261068a868685610695565b149050949350505050565b600080825190506000845190508060018751846106b291906111cf565b6106bc9190611225565b146106fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f3906112b6565b60405180910390fd5b60008167ffffffffffffffff81111561071857610717610a5e565b5b6040519080825280602002602001820160405280156107465781602001602082028036833780820191505090505b5090506000806000805b858110156108a057600087851061078d5785848061076d906112d6565b9550815181106107805761077f61131f565b5b60200260200101516107b5565b898580610799906112d6565b9650815181106107ac576107ab61131f565b5b60200260200101515b905060008b83815181106107cc576107cb61131f565b5b6020026020010151610804578c84806107e4906112d6565b9550815181106107f7576107f661131f565b5b6020026020010151610860565b88861061083757868580610817906112d6565b96508151811061082a5761082961131f565b5b602002602001015161085f565b8a8680610843906112d6565b9750815181106108565761085561131f565b5b60200260200101515b5b905061086c828261093c565b87848151811061087f5761087e61131f565b5b60200260200101818152505050508080610898906112d6565b915050610750565b5060008511156108de57836001866108b89190611225565b815181106108c9576108c861131f565b5b60200260200101519650505050505050610935565b600086111561091057876000815181106108fb576108fa61131f565b5b60200260200101519650505050505050610935565b896000815181106109245761092361131f565b5b602002602001015196505050505050505b9392505050565b60008183106109545761094f8284610967565b61095f565b61095e8383610967565b5b905092915050565b600082600052816020526040600020905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f8401126109b7576109b6610992565b5b8235905067ffffffffffffffff8111156109d4576109d3610997565b5b6020830191508360208202830111156109f0576109ef61099c565b5b9250929050565b60008083601f840112610a0d57610a0c610992565b5b8235905067ffffffffffffffff811115610a2a57610a29610997565b5b602083019150836020820283011115610a4657610a4561099c565b5b9250929050565b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a9682610a4d565b810181811067ffffffffffffffff82111715610ab557610ab4610a5e565b5b80604052505050565b6000610ac861097e565b9050610ad48282610a8d565b919050565b600067ffffffffffffffff821115610af457610af3610a5e565b5b602082029050602081019050919050565b6000819050919050565b610b1881610b05565b8114610b2357600080fd5b50565b600081359050610b3581610b0f565b92915050565b6000610b4e610b4984610ad9565b610abe565b90508083825260208201905060208402830185811115610b7157610b7061099c565b5b835b81811015610b9a5780610b868882610b26565b845260208401935050602081019050610b73565b5050509392505050565b600082601f830112610bb957610bb8610992565b5b8135610bc9848260208601610b3b565b91505092915050565b600080600080600060608688031215610bee57610bed610988565b5b600086013567ffffffffffffffff811115610c0c57610c0b61098d565b5b610c18888289016109a1565b9550955050602086013567ffffffffffffffff811115610c3b57610c3a61098d565b5b610c47888289016109f7565b9350935050604086013567ffffffffffffffff811115610c6a57610c6961098d565b5b610c7688828901610ba4565b9150509295509295909350565b610c8c81610b05565b82525050565b6000602082019050610ca76000830184610c83565b92915050565b600080600060408486031215610cc657610cc5610988565b5b600084013567ffffffffffffffff811115610ce457610ce361098d565b5b610cf0868287016109a1565b93509350506020610d0386828701610b26565b9150509250925092565b600080600060608486031215610d2657610d25610988565b5b600084013567ffffffffffffffff811115610d4457610d4361098d565b5b610d5086828701610ba4565b9350506020610d6186828701610b26565b9250506040610d7286828701610b26565b9150509250925092565b60008115159050919050565b610d9181610d7c565b82525050565b6000602082019050610dac6000830184610d88565b92915050565b60008060408385031215610dc957610dc8610988565b5b600083013567ffffffffffffffff811115610de757610de661098d565b5b610df385828601610ba4565b9250506020610e0485828601610b26565b9150509250929050565b60008060008060608587031215610e2857610e27610988565b5b600085013567ffffffffffffffff811115610e4657610e4561098d565b5b610e52878288016109a1565b94509450506020610e6587828801610b26565b9250506040610e7687828801610b26565b91505092959194509250565b60008060008060008060808789031215610e9f57610e9e610988565b5b600087013567ffffffffffffffff811115610ebd57610ebc61098d565b5b610ec989828a016109a1565b9650965050602087013567ffffffffffffffff811115610eec57610eeb61098d565b5b610ef889828a016109f7565b94509450506040610f0b89828a01610b26565b925050606087013567ffffffffffffffff811115610f2c57610f2b61098d565b5b610f3889828a01610ba4565b9150509295509295509295565b600067ffffffffffffffff821115610f6057610f5f610a5e565b5b602082029050602081019050919050565b610f7a81610d7c565b8114610f8557600080fd5b50565b600081359050610f9781610f71565b92915050565b6000610fb0610fab84610f45565b610abe565b90508083825260208201905060208402830185811115610fd357610fd261099c565b5b835b81811015610ffc5780610fe88882610f88565b845260208401935050602081019050610fd5565b5050509392505050565b600082601f83011261101b5761101a610992565b5b813561102b848260208601610f9d565b91505092915050565b6000806000806080858703121561104e5761104d610988565b5b600085013567ffffffffffffffff81111561106c5761106b61098d565b5b61107887828801610ba4565b945050602085013567ffffffffffffffff8111156110995761109861098d565b5b6110a587828801611006565b93505060406110b687828801610b26565b925050606085013567ffffffffffffffff8111156110d7576110d661098d565b5b6110e387828801610ba4565b91505092959194509250565b60008060006060848603121561110857611107610988565b5b600084013567ffffffffffffffff8111156111265761112561098d565b5b61113286828701610ba4565b935050602084013567ffffffffffffffff8111156111535761115261098d565b5b61115f86828701611006565b925050604084013567ffffffffffffffff8111156111805761117f61098d565b5b61118c86828701610ba4565b9150509250925092565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111da82611196565b91506111e583611196565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561121a576112196111a0565b5b828201905092915050565b600061123082611196565b915061123b83611196565b92508282101561124e5761124d6111a0565b5b828203905092915050565b600082825260208201905092915050565b7f4d65726b6c6550726f6f663a20696e76616c6964206d756c746970726f6f6600600082015250565b60006112a0601f83611259565b91506112ab8261126a565b602082019050919050565b600060208201905081810360008301526112cf81611293565b9050919050565b60006112e182611196565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611314576113136111a0565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561136457611363610988565b5b600061137284828501610f88565b9150509291505056fea26469706673582212200329aa0a7b4d2bcbbef38eef07d079a3a5350b552652fe96da84c05c79f52d8764736f6c63430008090033";
