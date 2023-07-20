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

interface SignedMathMockInterface extends ethers.utils.Interface {
  functions: {
    "abs(int256)": FunctionFragment;
    "average(int256,int256)": FunctionFragment;
    "max(int256,int256)": FunctionFragment;
    "min(int256,int256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "abs", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "average",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "max",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "min",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "abs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "average", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "max", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "min", data: BytesLike): Result;

  events: {};
}

export class SignedMathMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SignedMathMockInterface;

  functions: {
    abs(n: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    "abs(int256)"(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    average(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "average(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    max(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "max(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    min(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "min(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  abs(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "abs(int256)"(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  average(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "average(int256,int256)"(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  max(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "max(int256,int256)"(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  min(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "min(int256,int256)"(
    a: BigNumberish,
    b: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    abs(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "abs(int256)"(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    average(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "average(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    max(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "max(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    min(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "min(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    abs(n: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "abs(int256)"(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    average(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "average(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    max(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "max(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    min(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "min(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    abs(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "abs(int256)"(
      n: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    average(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "average(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    max(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "max(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    min(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "min(int256,int256)"(
      a: BigNumberish,
      b: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
