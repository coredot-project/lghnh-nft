/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BadBeaconNotContractInterface extends ethers.utils.Interface {
  functions: {
    "implementation()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;

  events: {};
}

export class BadBeaconNotContract extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BadBeaconNotContractInterface;

  functions: {
    implementation(overrides?: CallOverrides): Promise<[string]>;

    "implementation()"(overrides?: CallOverrides): Promise<[string]>;
  };

  implementation(overrides?: CallOverrides): Promise<string>;

  "implementation()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    implementation(overrides?: CallOverrides): Promise<string>;

    "implementation()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    "implementation()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "implementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
