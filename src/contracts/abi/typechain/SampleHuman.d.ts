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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SampleHumanInterface extends ethers.utils.Interface {
  functions: {
    "initialize()": FunctionFragment;
    "isHuman()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isHuman", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isHuman", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export class SampleHuman extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SampleHumanInterface;

  functions: {
    initialize(overrides?: Overrides): Promise<ContractTransaction>;

    "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

    isHuman(overrides?: CallOverrides): Promise<[boolean]>;

    "isHuman()"(overrides?: CallOverrides): Promise<[boolean]>;
  };

  initialize(overrides?: Overrides): Promise<ContractTransaction>;

  "initialize()"(overrides?: Overrides): Promise<ContractTransaction>;

  isHuman(overrides?: CallOverrides): Promise<boolean>;

  "isHuman()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    initialize(overrides?: CallOverrides): Promise<void>;

    "initialize()"(overrides?: CallOverrides): Promise<void>;

    isHuman(overrides?: CallOverrides): Promise<boolean>;

    "isHuman()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    Initialized(version: null): EventFilter;
  };

  estimateGas: {
    initialize(overrides?: Overrides): Promise<BigNumber>;

    "initialize()"(overrides?: Overrides): Promise<BigNumber>;

    isHuman(overrides?: CallOverrides): Promise<BigNumber>;

    "isHuman()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(overrides?: Overrides): Promise<PopulatedTransaction>;

    "initialize()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    isHuman(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isHuman()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
