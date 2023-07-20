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

interface ContextMockInterface extends ethers.utils.Interface {
  functions: {
    "msgData(uint256,string)": FunctionFragment;
    "msgSender()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "msgData",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "msgSender", values?: undefined): string;

  decodeFunctionResult(functionFragment: "msgData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msgSender", data: BytesLike): Result;

  events: {
    "Data(bytes,uint256,string)": EventFragment;
    "Sender(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Data"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sender"): EventFragment;
}

export class ContextMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ContextMockInterface;

  functions: {
    msgData(
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "msgData(uint256,string)"(
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    msgSender(overrides?: Overrides): Promise<ContractTransaction>;

    "msgSender()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  msgData(
    integerValue: BigNumberish,
    stringValue: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "msgData(uint256,string)"(
    integerValue: BigNumberish,
    stringValue: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  msgSender(overrides?: Overrides): Promise<ContractTransaction>;

  "msgSender()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    msgData(
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "msgData(uint256,string)"(
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: CallOverrides
    ): Promise<void>;

    msgSender(overrides?: CallOverrides): Promise<void>;

    "msgSender()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Data(data: null, integerValue: null, stringValue: null): EventFilter;

    Sender(sender: null): EventFilter;
  };

  estimateGas: {
    msgData(
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "msgData(uint256,string)"(
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    msgSender(overrides?: Overrides): Promise<BigNumber>;

    "msgSender()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    msgData(
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "msgData(uint256,string)"(
      integerValue: BigNumberish,
      stringValue: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    msgSender(overrides?: Overrides): Promise<PopulatedTransaction>;

    "msgSender()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
