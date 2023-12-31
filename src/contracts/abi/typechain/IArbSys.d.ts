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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IArbSysInterface extends ethers.utils.Interface {
  functions: {
    "arbBlockNumber()": FunctionFragment;
    "arbChainID()": FunctionFragment;
    "arbOSVersion()": FunctionFragment;
    "getStorageAt(address,uint256)": FunctionFragment;
    "getStorageGasAvailable()": FunctionFragment;
    "getTransactionCount(address)": FunctionFragment;
    "isTopLevelCall()": FunctionFragment;
    "mapL1SenderContractAddressToL2Alias(address,address)": FunctionFragment;
    "myCallersAddressWithoutAliasing()": FunctionFragment;
    "sendTxToL1(address,bytes)": FunctionFragment;
    "wasMyCallersAddressAliased()": FunctionFragment;
    "withdrawEth(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "arbBlockNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "arbChainID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "arbOSVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getStorageAt",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStorageGasAvailable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionCount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isTopLevelCall",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mapL1SenderContractAddressToL2Alias",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "myCallersAddressWithoutAliasing",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendTxToL1",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "wasMyCallersAddressAliased",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdrawEth", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "arbBlockNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "arbChainID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "arbOSVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStorageAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStorageGasAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTopLevelCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mapL1SenderContractAddressToL2Alias",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "myCallersAddressWithoutAliasing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendTxToL1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wasMyCallersAddressAliased",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEth",
    data: BytesLike
  ): Result;

  events: {
    "L2ToL1Transaction(address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "L2ToL1Transaction"): EventFragment;
}

export class IArbSys extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IArbSysInterface;

  functions: {
    arbBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    "arbBlockNumber()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    arbChainID(overrides?: CallOverrides): Promise<[BigNumber]>;

    "arbChainID()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    arbOSVersion(overrides?: CallOverrides): Promise<[BigNumber]>;

    "arbOSVersion()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getStorageAt(address,uint256)"(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getStorageGasAvailable()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTransactionCount(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTransactionCount(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isTopLevelCall(overrides?: CallOverrides): Promise<[boolean]>;

    "isTopLevelCall()"(overrides?: CallOverrides): Promise<[boolean]>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "mapL1SenderContractAddressToL2Alias(address,address)"(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<[string]>;

    "myCallersAddressWithoutAliasing()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    sendTxToL1(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sendTxToL1(address,bytes)"(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<[boolean]>;

    "wasMyCallersAddressAliased()"(
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "withdrawEth(address)"(
      destination: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

  "arbBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

  arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

  "arbChainID()"(overrides?: CallOverrides): Promise<BigNumber>;

  arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

  "arbOSVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

  getStorageAt(
    account: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getStorageAt(address,uint256)"(
    account: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

  "getStorageGasAvailable()"(overrides?: CallOverrides): Promise<BigNumber>;

  getTransactionCount(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTransactionCount(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isTopLevelCall(overrides?: CallOverrides): Promise<boolean>;

  "isTopLevelCall()"(overrides?: CallOverrides): Promise<boolean>;

  mapL1SenderContractAddressToL2Alias(
    sender: string,
    dest: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "mapL1SenderContractAddressToL2Alias(address,address)"(
    sender: string,
    dest: string,
    overrides?: CallOverrides
  ): Promise<string>;

  myCallersAddressWithoutAliasing(overrides?: CallOverrides): Promise<string>;

  "myCallersAddressWithoutAliasing()"(
    overrides?: CallOverrides
  ): Promise<string>;

  sendTxToL1(
    destination: string,
    calldataForL1: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sendTxToL1(address,bytes)"(
    destination: string,
    calldataForL1: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<boolean>;

  "wasMyCallersAddressAliased()"(overrides?: CallOverrides): Promise<boolean>;

  withdrawEth(
    destination: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "withdrawEth(address)"(
    destination: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "arbBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

    arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

    "arbChainID()"(overrides?: CallOverrides): Promise<BigNumber>;

    arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "arbOSVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getStorageAt(address,uint256)"(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    "getStorageGasAvailable()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTransactionCount(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTransactionCount(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTopLevelCall(overrides?: CallOverrides): Promise<boolean>;

    "isTopLevelCall()"(overrides?: CallOverrides): Promise<boolean>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "mapL1SenderContractAddressToL2Alias(address,address)"(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<string>;

    myCallersAddressWithoutAliasing(overrides?: CallOverrides): Promise<string>;

    "myCallersAddressWithoutAliasing()"(
      overrides?: CallOverrides
    ): Promise<string>;

    sendTxToL1(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendTxToL1(address,bytes)"(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<boolean>;

    "wasMyCallersAddressAliased()"(overrides?: CallOverrides): Promise<boolean>;

    withdrawEth(
      destination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdrawEth(address)"(
      destination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    L2ToL1Transaction(
      caller: null,
      destination: string | null,
      uniqueId: BigNumberish | null,
      batchNumber: BigNumberish | null,
      indexInBatch: null,
      arbBlockNum: null,
      ethBlockNum: null,
      timestamp: null,
      callvalue: null,
      data: null
    ): EventFilter;
  };

  estimateGas: {
    arbBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;

    "arbBlockNumber()"(overrides?: CallOverrides): Promise<BigNumber>;

    arbChainID(overrides?: CallOverrides): Promise<BigNumber>;

    "arbChainID()"(overrides?: CallOverrides): Promise<BigNumber>;

    arbOSVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "arbOSVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getStorageAt(address,uint256)"(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStorageGasAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    "getStorageGasAvailable()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTransactionCount(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTransactionCount(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTopLevelCall(overrides?: CallOverrides): Promise<BigNumber>;

    "isTopLevelCall()"(overrides?: CallOverrides): Promise<BigNumber>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mapL1SenderContractAddressToL2Alias(address,address)"(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "myCallersAddressWithoutAliasing()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendTxToL1(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sendTxToL1(address,bytes)"(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    wasMyCallersAddressAliased(overrides?: CallOverrides): Promise<BigNumber>;

    "wasMyCallersAddressAliased()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "withdrawEth(address)"(
      destination: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    arbBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "arbBlockNumber()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    arbChainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "arbChainID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    arbOSVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "arbOSVersion()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStorageAt(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getStorageAt(address,uint256)"(
      account: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStorageGasAvailable(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getStorageGasAvailable()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTransactionCount(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTransactionCount(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTopLevelCall(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isTopLevelCall()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mapL1SenderContractAddressToL2Alias(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "mapL1SenderContractAddressToL2Alias(address,address)"(
      sender: string,
      dest: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    myCallersAddressWithoutAliasing(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "myCallersAddressWithoutAliasing()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendTxToL1(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sendTxToL1(address,bytes)"(
      destination: string,
      calldataForL1: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    wasMyCallersAddressAliased(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "wasMyCallersAddressAliased()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawEth(
      destination: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "withdrawEth(address)"(
      destination: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
