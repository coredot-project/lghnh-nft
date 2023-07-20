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

interface ContextMockCallerInterface extends ethers.utils.Interface {
  functions: {
    "callData(address,uint256,string)": FunctionFragment;
    "callSender(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "callData",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "callSender", values: [string]): string;

  decodeFunctionResult(functionFragment: "callData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "callSender", data: BytesLike): Result;

  events: {};
}

export class ContextMockCaller extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ContextMockCallerInterface;

  functions: {
    callData(
      context: string,
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "callData(address,uint256,string)"(
      context: string,
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    callSender(
      context: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "callSender(address)"(
      context: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  callData(
    context: string,
    integerValue: BigNumberish,
    stringValue: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "callData(address,uint256,string)"(
    context: string,
    integerValue: BigNumberish,
    stringValue: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callSender(
    context: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "callSender(address)"(
    context: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    callData(
      context: string,
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "callData(address,uint256,string)"(
      context: string,
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: CallOverrides
    ): Promise<void>;

    callSender(context: string, overrides?: CallOverrides): Promise<void>;

    "callSender(address)"(
      context: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    callData(
      context: string,
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "callData(address,uint256,string)"(
      context: string,
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    callSender(context: string, overrides?: Overrides): Promise<BigNumber>;

    "callSender(address)"(
      context: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    callData(
      context: string,
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "callData(address,uint256,string)"(
      context: string,
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    callSender(
      context: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "callSender(address)"(
      context: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
