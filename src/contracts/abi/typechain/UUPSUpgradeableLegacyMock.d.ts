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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UUPSUpgradeableLegacyMockInterface extends ethers.utils.Interface {
  functions: {
    "current()": FunctionFragment;
    "decrement()": FunctionFragment;
    "increment()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "reset()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "current", values?: undefined): string;
  encodeFunctionData(functionFragment: "decrement", values?: undefined): string;
  encodeFunctionData(functionFragment: "increment", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "reset", values?: undefined): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "current", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decrement", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export class UUPSUpgradeableLegacyMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UUPSUpgradeableLegacyMockInterface;

  functions: {
    current(overrides?: CallOverrides): Promise<[BigNumber]>;

    "current()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    decrement(overrides?: Overrides): Promise<ContractTransaction>;

    "decrement()"(overrides?: Overrides): Promise<ContractTransaction>;

    increment(overrides?: Overrides): Promise<ContractTransaction>;

    "increment()"(overrides?: Overrides): Promise<ContractTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<[string]>;

    reset(overrides?: Overrides): Promise<ContractTransaction>;

    "reset()"(overrides?: Overrides): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "upgradeTo(address)"(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "upgradeToAndCall(address,bytes)"(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  current(overrides?: CallOverrides): Promise<BigNumber>;

  "current()"(overrides?: CallOverrides): Promise<BigNumber>;

  decrement(overrides?: Overrides): Promise<ContractTransaction>;

  "decrement()"(overrides?: Overrides): Promise<ContractTransaction>;

  increment(overrides?: Overrides): Promise<ContractTransaction>;

  "increment()"(overrides?: Overrides): Promise<ContractTransaction>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  "proxiableUUID()"(overrides?: CallOverrides): Promise<string>;

  reset(overrides?: Overrides): Promise<ContractTransaction>;

  "reset()"(overrides?: Overrides): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "upgradeTo(address)"(
    newImplementation: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "upgradeToAndCall(address,bytes)"(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    current(overrides?: CallOverrides): Promise<BigNumber>;

    "current()"(overrides?: CallOverrides): Promise<BigNumber>;

    decrement(overrides?: CallOverrides): Promise<void>;

    "decrement()"(overrides?: CallOverrides): Promise<void>;

    increment(overrides?: CallOverrides): Promise<void>;

    "increment()"(overrides?: CallOverrides): Promise<void>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<string>;

    reset(overrides?: CallOverrides): Promise<void>;

    "reset()"(overrides?: CallOverrides): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgradeTo(address)"(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "upgradeToAndCall(address,bytes)"(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AdminChanged(previousAdmin: null, newAdmin: null): EventFilter;

    BeaconUpgraded(beacon: string | null): EventFilter;

    Upgraded(implementation: string | null): EventFilter;
  };

  estimateGas: {
    current(overrides?: CallOverrides): Promise<BigNumber>;

    "current()"(overrides?: CallOverrides): Promise<BigNumber>;

    decrement(overrides?: Overrides): Promise<BigNumber>;

    "decrement()"(overrides?: Overrides): Promise<BigNumber>;

    increment(overrides?: Overrides): Promise<BigNumber>;

    "increment()"(overrides?: Overrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<BigNumber>;

    reset(overrides?: Overrides): Promise<BigNumber>;

    "reset()"(overrides?: Overrides): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "upgradeTo(address)"(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "upgradeToAndCall(address,bytes)"(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    current(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "current()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decrement(overrides?: Overrides): Promise<PopulatedTransaction>;

    "decrement()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    increment(overrides?: Overrides): Promise<PopulatedTransaction>;

    "increment()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proxiableUUID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reset(overrides?: Overrides): Promise<PopulatedTransaction>;

    "reset()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "upgradeTo(address)"(
      newImplementation: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "upgradeToAndCall(address,bytes)"(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
