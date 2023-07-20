/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MulticallTest } from "../MulticallTest";

export class MulticallTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MulticallTest> {
    return super.deploy(overrides || {}) as Promise<MulticallTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MulticallTest {
    return super.attach(address) as MulticallTest;
  }
  connect(signer: Signer): MulticallTest__factory {
    return super.connect(signer) as MulticallTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MulticallTest {
    return new Contract(address, _abi, signerOrProvider) as MulticallTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract MulticallTokenMock",
        name: "multicallToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "testReturnValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a2d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063bc548f7614610030575b600080fd5b61004a600480360381019061004591906103e4565b61004c565b005b60008484905067ffffffffffffffff81111561006b5761006a610479565b5b60405190808252806020026020018201604052801561009e57816020015b60608152602001906001900390816100895790505b50905060005b858590508110156101b0578585828181106100c2576100c16104a8565b5b90506020020160208101906100d79190610503565b8484838181106100ea576100e96104a8565b5b90506020020135604051602401610102929190610558565b6040516020818303038152906040527fa9059cbb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050828281518110610192576101916104a8565b5b602002602001018190525080806101a8906105b0565b9150506100a4565b5060008673ffffffffffffffffffffffffffffffffffffffff1663ac9650d8836040518263ffffffff1660e01b81526004016101ec9190610754565b600060405180830381600087803b15801561020657600080fd5b505af115801561021a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906102439190610949565b905060005b815181101561029b57818181518110610264576102636104a8565b5b602002602001015180602001905181019061027f91906109ca565b61028857600080fd5b8080610293906105b0565b915050610248565b5050505050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102e4826102b9565b9050919050565b60006102f6826102d9565b9050919050565b610306816102eb565b811461031157600080fd5b50565b600081359050610323816102fd565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261034e5761034d610329565b5b8235905067ffffffffffffffff81111561036b5761036a61032e565b5b60208301915083602082028301111561038757610386610333565b5b9250929050565b60008083601f8401126103a4576103a3610329565b5b8235905067ffffffffffffffff8111156103c1576103c061032e565b5b6020830191508360208202830111156103dd576103dc610333565b5b9250929050565b600080600080600060608688031215610400576103ff6102af565b5b600061040e88828901610314565b955050602086013567ffffffffffffffff81111561042f5761042e6102b4565b5b61043b88828901610338565b9450945050604086013567ffffffffffffffff81111561045e5761045d6102b4565b5b61046a8882890161038e565b92509250509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6104e0816102d9565b81146104eb57600080fd5b50565b6000813590506104fd816104d7565b92915050565b600060208284031215610519576105186102af565b5b6000610527848285016104ee565b91505092915050565b610539816102d9565b82525050565b6000819050919050565b6105528161053f565b82525050565b600060408201905061056d6000830185610530565b61057a6020830184610549565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105bb8261053f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156105ee576105ed610581565b5b600182019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561065f578082015181840152602081019050610644565b8381111561066e576000848401525b50505050565b6000601f19601f8301169050919050565b600061069082610625565b61069a8185610630565b93506106aa818560208601610641565b6106b381610674565b840191505092915050565b60006106ca8383610685565b905092915050565b6000602082019050919050565b60006106ea826105f9565b6106f48185610604565b93508360208202850161070685610615565b8060005b85811015610742578484038952815161072385826106be565b945061072e836106d2565b925060208a0199505060018101905061070a565b50829750879550505050505092915050565b6000602082019050818103600083015261076e81846106df565b905092915050565b61077f82610674565b810181811067ffffffffffffffff8211171561079e5761079d610479565b5b80604052505050565b60006107b16102a5565b90506107bd8282610776565b919050565b600067ffffffffffffffff8211156107dd576107dc610479565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff82111561080e5761080d610479565b5b61081782610674565b9050602081019050919050565b6000610837610832846107f3565b6107a7565b905082815260208101848484011115610853576108526107ee565b5b61085e848285610641565b509392505050565b600082601f83011261087b5761087a610329565b5b815161088b848260208601610824565b91505092915050565b60006108a76108a2846107c2565b6107a7565b905080838252602082019050602084028301858111156108ca576108c9610333565b5b835b8181101561091157805167ffffffffffffffff8111156108ef576108ee610329565b5b8086016108fc8982610866565b855260208501945050506020810190506108cc565b5050509392505050565b600082601f8301126109305761092f610329565b5b8151610940848260208601610894565b91505092915050565b60006020828403121561095f5761095e6102af565b5b600082015167ffffffffffffffff81111561097d5761097c6102b4565b5b6109898482850161091b565b91505092915050565b60008115159050919050565b6109a781610992565b81146109b257600080fd5b50565b6000815190506109c48161099e565b92915050565b6000602082840312156109e0576109df6102af565b5b60006109ee848285016109b5565b9150509291505056fea26469706673582212202f297390b2cfa33fbd2b1b43a75a3e6b3919d9384ab95599dd71020819b6d33764736f6c63430008090033";
