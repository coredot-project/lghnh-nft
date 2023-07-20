/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MathMock } from "../MathMock";

export class MathMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MathMock> {
    return super.deploy(overrides || {}) as Promise<MathMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MathMock {
    return super.attach(address) as MathMock;
  }
  connect(signer: Signer): MathMock__factory {
    return super.connect(signer) as MathMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MathMock {
    return new Contract(address, _abi, signerOrProvider) as MathMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "average",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "ceilDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "max",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "min",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "denominator",
        type: "uint256",
      },
      {
        internalType: "enum Math.Rounding",
        name: "direction",
        type: "uint8",
      },
    ],
    name: "mulDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "enum Math.Rounding",
        name: "direction",
        type: "uint8",
      },
    ],
    name: "sqrt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061094d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631a134248146100675780632b7423ab146100975780636d5433e6146100c75780637ae2b5c7146100f75780639cb3532714610127578063ae2affdd14610157575b600080fd5b610081600480360381019061007c9190610664565b610187565b60405161008e91906106da565b60405180910390f35b6100b160048036038101906100ac91906106f5565b61019f565b6040516100be91906106da565b60405180910390f35b6100e160048036038101906100dc91906106f5565b6101b3565b6040516100ee91906106da565b60405180910390f35b610111600480360381019061010c91906106f5565b6101c7565b60405161011e91906106da565b60405180910390f35b610141600480360381019061013c91906106f5565b6101db565b60405161014e91906106da565b60405180910390f35b610171600480360381019061016c9190610735565b6101ef565b60405161017e91906106da565b60405180910390f35b600061019585858585610203565b9050949350505050565b60006101ab8383610279565b905092915050565b60006101bf838361029f565b905092915050565b60006101d383836102b9565b905092915050565b60006101e783836102d2565b905092915050565b60006101fb838361030f565b905092915050565b60008061021186868661037a565b90506001600281111561022757610226610775565b5b83600281111561023a57610239610775565b5b148015610258575060008480610253576102526107a4565b5b868809115b1561026d5760018161026a9190610802565b90505b80915050949350505050565b6000600282841861028a9190610858565b8284166102979190610802565b905092915050565b6000818310156102af57816102b1565b825b905092915050565b60008183106102c857816102ca565b825b905092915050565b6000808314610304576001826001856102eb9190610889565b6102f59190610858565b6102ff9190610802565b610307565b60005b905092915050565b60008061031b84610456565b90506001600281111561033157610330610775565b5b83600281111561034457610343610775565b5b14801561035b575083818261035991906108bd565b105b156103705760018161036d9190610802565b90505b8091505092915050565b6000806000801985870985870292508281108382030391505060008114156103b6578382816103ac576103ab6107a4565b5b049250505061044f565b8084116103c257600080fd5b60008486880990508281118203915080830392506000600186190186169050808604955080840493506001818260000304019050808302841793506000600287600302189050808702600203810290508087026002038102905080870260020381029050808702600203810290508087026002038102905080870260020381029050808502955050505050505b9392505050565b60008082141561046957600090506105ff565b60006001905060008390506000608082901c111561049057608081901c9050604082901b91505b6000604082901c11156104ac57604081901c9050602082901b91505b6000602082901c11156104c857602081901c9050601082901b91505b6000601082901c11156104e457601081901c9050600882901b91505b6000600882901c111561050057600881901c9050600482901b91505b6000600482901c111561051c57600481901c9050600282901b91505b6000600282901c111561053157600182901b91505b6001828581610543576105426107a4565b5b048301901c9150600182858161055c5761055b6107a4565b5b048301901c91506001828581610575576105746107a4565b5b048301901c9150600182858161058e5761058d6107a4565b5b048301901c915060018285816105a7576105a66107a4565b5b048301901c915060018285816105c0576105bf6107a4565b5b048301901c915060018285816105d9576105d86107a4565b5b048301901c91506105fa828386816105f4576105f36107a4565b5b046102b9565b925050505b919050565b600080fd5b6000819050919050565b61061c81610609565b811461062757600080fd5b50565b60008135905061063981610613565b92915050565b6003811061064c57600080fd5b50565b60008135905061065e8161063f565b92915050565b6000806000806080858703121561067e5761067d610604565b5b600061068c8782880161062a565b945050602061069d8782880161062a565b93505060406106ae8782880161062a565b92505060606106bf8782880161064f565b91505092959194509250565b6106d481610609565b82525050565b60006020820190506106ef60008301846106cb565b92915050565b6000806040838503121561070c5761070b610604565b5b600061071a8582860161062a565b925050602061072b8582860161062a565b9150509250929050565b6000806040838503121561074c5761074b610604565b5b600061075a8582860161062a565b925050602061076b8582860161064f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061080d82610609565b915061081883610609565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561084d5761084c6107d3565b5b828201905092915050565b600061086382610609565b915061086e83610609565b92508261087e5761087d6107a4565b5b828204905092915050565b600061089482610609565b915061089f83610609565b9250828210156108b2576108b16107d3565b5b828203905092915050565b60006108c882610609565b91506108d383610609565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561090c5761090b6107d3565b5b82820290509291505056fea264697066735822122028a9c43debdf037e1b91cf5132cd3bcc4b3353842dd270b7dbdb2dfaa2efd99364736f6c63430008090033";