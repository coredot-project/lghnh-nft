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

interface CrossChainEnabledArbitrumL2MockInterface
  extends ethers.utils.Interface {
  functions: {
    "crossChainOwnerRestricted()": FunctionFragment;
    "crossChainRestricted()": FunctionFragment;
    "owner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "crossChainOwnerRestricted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "crossChainRestricted",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "crossChainOwnerRestricted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "crossChainRestricted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;

  events: {};
}

export class CrossChainEnabledArbitrumL2Mock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CrossChainEnabledArbitrumL2MockInterface;

  functions: {
    crossChainOwnerRestricted(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "crossChainOwnerRestricted()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    crossChainRestricted(overrides?: Overrides): Promise<ContractTransaction>;

    "crossChainRestricted()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;
  };

  crossChainOwnerRestricted(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "crossChainOwnerRestricted()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  crossChainRestricted(overrides?: Overrides): Promise<ContractTransaction>;

  "crossChainRestricted()"(overrides?: Overrides): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    crossChainOwnerRestricted(overrides?: CallOverrides): Promise<void>;

    "crossChainOwnerRestricted()"(overrides?: CallOverrides): Promise<void>;

    crossChainRestricted(overrides?: CallOverrides): Promise<void>;

    "crossChainRestricted()"(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    crossChainOwnerRestricted(overrides?: Overrides): Promise<BigNumber>;

    "crossChainOwnerRestricted()"(overrides?: Overrides): Promise<BigNumber>;

    crossChainRestricted(overrides?: Overrides): Promise<BigNumber>;

    "crossChainRestricted()"(overrides?: Overrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    crossChainOwnerRestricted(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "crossChainOwnerRestricted()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    crossChainRestricted(overrides?: Overrides): Promise<PopulatedTransaction>;

    "crossChainRestricted()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}