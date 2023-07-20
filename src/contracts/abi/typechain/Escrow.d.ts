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

interface EscrowInterface extends ethers.utils.Interface {
  functions: {
    "deposit(address)": FunctionFragment;
    "depositsOf(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "deposit", values: [string]): string;
  encodeFunctionData(functionFragment: "depositsOf", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositsOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class Escrow extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EscrowInterface;

  functions: {
    deposit(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "deposit(address)"(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      payee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  deposit(
    payee: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "deposit(address)"(
    payee: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

  "depositsOf(address)"(
    payee: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(payee: string, overrides?: Overrides): Promise<ContractTransaction>;

  "withdraw(address)"(
    payee: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(payee: string, overrides?: CallOverrides): Promise<void>;

    "deposit(address)"(payee: string, overrides?: CallOverrides): Promise<void>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(payee: string, overrides?: CallOverrides): Promise<void>;

    "withdraw(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Deposited(payee: string | null, weiAmount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Withdrawn(payee: string | null, weiAmount: null): EventFilter;
  };

  estimateGas: {
    deposit(payee: string, overrides?: PayableOverrides): Promise<BigNumber>;

    "deposit(address)"(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(payee: string, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "deposit(address)"(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    depositsOf(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      payee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
