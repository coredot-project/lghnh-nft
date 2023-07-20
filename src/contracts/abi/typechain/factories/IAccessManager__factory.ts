/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IAccessManager } from "../IAccessManager";

export class IAccessManager__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccessManager {
    return new Contract(address, _abi, signerOrProvider) as IAccessManager;
  }
}

const _abi = [
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
];
