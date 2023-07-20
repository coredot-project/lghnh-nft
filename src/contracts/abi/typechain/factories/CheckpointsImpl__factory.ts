/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CheckpointsImpl } from "../CheckpointsImpl";

export class CheckpointsImpl__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<CheckpointsImpl> {
    return super.deploy(overrides || {}) as Promise<CheckpointsImpl>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CheckpointsImpl {
    return super.attach(address) as CheckpointsImpl;
  }
  connect(signer: Signer): CheckpointsImpl__factory {
    return super.connect(signer) as CheckpointsImpl__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CheckpointsImpl {
    return new Contract(address, _abi, signerOrProvider) as CheckpointsImpl;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getAtBlock",
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
    name: "latest",
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
    name: "length",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109fe806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f7b6d321461005157806352bfe7891461006f578063959ac4841461008d578063ee1bc751146100be575b600080fd5b6100596100ee565b604051610066919061063d565b60405180910390f35b6100776100fd565b604051610084919061063d565b60405180910390f35b6100a760048036038101906100a29190610689565b61010e565b6040516100b59291906106b6565b60405180910390f35b6100d860048036038101906100d39190610689565b61012e565b6040516100e5919061063d565b60405180910390f35b60008060000180549050905090565b6000610109600061014b565b905090565b6000806101258360006101e690919063ffffffff16565b91509150915091565b60006101448260006103e890919063ffffffff16565b9050919050565b60008082600001805490509050600081146101bd5782600001600182610171919061070e565b8154811061018257610181610742565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166101c0565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b60008060008460000180549050905060006102008661014b565b90506000821180156102565750438660000160018461021f919061070e565b815481106102305761022f610742565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16145b156102e65761026485610540565b86600001600184610275919061070e565b8154811061028657610285610742565b5b9060005260206000200160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602179055506103d9565b8560000160405180604001604052806102fe436105ab565b63ffffffff16815260200161031288610540565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b80859350935050509250929050565b600043821061042c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610423906107ce565b60405180910390fd5b60008360000180549050905060005b818110156104b057600061044f82846105fe565b90508486600001828154811061046857610467610742565b5b9060005260206000200160000160009054906101000a900463ffffffff1663ffffffff16111561049a578092506104aa565b6001816104a791906107ee565b91505b5061043b565b6000821461051557846000016001836104c9919061070e565b815481106104da576104d9610742565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16610518565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169250505092915050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80168211156105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059a906108b6565b60405180910390fd5b819050919050565b600063ffffffff80168211156105f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ed90610948565b60405180910390fd5b819050919050565b6000600282841861060f9190610997565b82841661061c91906107ee565b905092915050565b6000819050919050565b61063781610624565b82525050565b6000602082019050610652600083018461062e565b92915050565b600080fd5b61066681610624565b811461067157600080fd5b50565b6000813590506106838161065d565b92915050565b60006020828403121561069f5761069e610658565b5b60006106ad84828501610674565b91505092915050565b60006040820190506106cb600083018561062e565b6106d8602083018461062e565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061071982610624565b915061072483610624565b925082821015610737576107366106df565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082825260208201905092915050565b7f436865636b706f696e74733a20626c6f636b206e6f7420796574206d696e6564600082015250565b60006107b8602083610771565b91506107c382610782565b602082019050919050565b600060208201905081810360008301526107e7816107ab565b9050919050565b60006107f982610624565b915061080483610624565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610839576108386106df565b5b828201905092915050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b60006108a0602783610771565b91506108ab82610844565b604082019050919050565b600060208201905081810360008301526108cf81610893565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b6000610932602683610771565b915061093d826108d6565b604082019050919050565b6000602082019050818103600083015261096181610925565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006109a282610624565b91506109ad83610624565b9250826109bd576109bc610968565b5b82820490509291505056fea26469706673582212203f644727eefaf3770ef0072ebd67da184d8c8211f0e6bac5520c8ae734f7605c64736f6c63430008090033";