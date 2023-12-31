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

interface CrossChainEnabledPolygonChildInterface
  extends ethers.utils.Interface {
  functions: {
    "processMessageFromRoot(uint256,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "processMessageFromRoot",
    values: [BigNumberish, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "processMessageFromRoot",
    data: BytesLike
  ): Result;

  events: {};
}

export class CrossChainEnabledPolygonChild extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CrossChainEnabledPolygonChildInterface;

  functions: {
    processMessageFromRoot(
      arg0: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "processMessageFromRoot(uint256,address,bytes)"(
      arg0: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  processMessageFromRoot(
    arg0: BigNumberish,
    rootMessageSender: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "processMessageFromRoot(uint256,address,bytes)"(
    arg0: BigNumberish,
    rootMessageSender: string,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    processMessageFromRoot(
      arg0: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "processMessageFromRoot(uint256,address,bytes)"(
      arg0: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    processMessageFromRoot(
      arg0: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "processMessageFromRoot(uint256,address,bytes)"(
      arg0: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    processMessageFromRoot(
      arg0: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "processMessageFromRoot(uint256,address,bytes)"(
      arg0: BigNumberish,
      rootMessageSender: string,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
