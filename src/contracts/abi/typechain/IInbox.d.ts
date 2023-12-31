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

interface IInboxInterface extends ethers.utils.Interface {
  functions: {
    "bridge()": FunctionFragment;
    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    "createRetryableTicketNoRefundAliasRewrite(address,uint256,uint256,address,address,uint256,uint256,bytes)": FunctionFragment;
    "depositEth(uint256)": FunctionFragment;
    "pauseCreateRetryables()": FunctionFragment;
    "sendContractTransaction(uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "sendL1FundedContractTransaction(uint256,uint256,address,bytes)": FunctionFragment;
    "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)": FunctionFragment;
    "sendL2Message(bytes)": FunctionFragment;
    "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)": FunctionFragment;
    "startRewriteAddress()": FunctionFragment;
    "stopRewriteAddress()": FunctionFragment;
    "unpauseCreateRetryables()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createRetryableTicket",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createRetryableTicketNoRefundAliasRewrite",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseCreateRetryables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendContractTransaction",
    values: [BigNumberish, BigNumberish, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL1FundedContractTransaction",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL1FundedUnsignedTransaction",
    values: [BigNumberish, BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL2Message",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendUnsignedTransaction",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "startRewriteAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stopRewriteAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unpauseCreateRetryables",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRetryableTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createRetryableTicketNoRefundAliasRewrite",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pauseCreateRetryables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendContractTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL1FundedContractTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL1FundedUnsignedTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL2Message",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendUnsignedTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startRewriteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopRewriteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpauseCreateRetryables",
    data: BytesLike
  ): Result;

  events: {
    "InboxMessageDelivered(uint256,bytes)": EventFragment;
    "InboxMessageDeliveredFromOrigin(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InboxMessageDelivered"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "InboxMessageDeliveredFromOrigin"
  ): EventFragment;
}

export class IInbox extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IInboxInterface;

  functions: {
    bridge(overrides?: CallOverrides): Promise<[string]>;

    "bridge()"(overrides?: CallOverrides): Promise<[string]>;

    createRetryableTicket(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    createRetryableTicketNoRefundAliasRewrite(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "createRetryableTicketNoRefundAliasRewrite(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "depositEth(uint256)"(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    pauseCreateRetryables(overrides?: Overrides): Promise<ContractTransaction>;

    "pauseCreateRetryables()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendContractTransaction(uint256,uint256,address,uint256,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sendL1FundedContractTransaction(uint256,uint256,address,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendL2Message(bytes)"(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    startRewriteAddress(overrides?: Overrides): Promise<ContractTransaction>;

    "startRewriteAddress()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stopRewriteAddress(overrides?: Overrides): Promise<ContractTransaction>;

    "stopRewriteAddress()"(overrides?: Overrides): Promise<ContractTransaction>;

    unpauseCreateRetryables(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unpauseCreateRetryables()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  bridge(overrides?: CallOverrides): Promise<string>;

  "bridge()"(overrides?: CallOverrides): Promise<string>;

  createRetryableTicket(
    destAddr: string,
    arbTxCallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    submissionRefundAddress: string,
    valueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
    destAddr: string,
    arbTxCallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    submissionRefundAddress: string,
    valueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  createRetryableTicketNoRefundAliasRewrite(
    destAddr: string,
    arbTxCallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    submissionRefundAddress: string,
    valueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "createRetryableTicketNoRefundAliasRewrite(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
    destAddr: string,
    arbTxCallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    submissionRefundAddress: string,
    valueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  depositEth(
    maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "depositEth(uint256)"(
    maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  pauseCreateRetryables(overrides?: Overrides): Promise<ContractTransaction>;

  "pauseCreateRetryables()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendContractTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendContractTransaction(uint256,uint256,address,uint256,bytes)"(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendL1FundedContractTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sendL1FundedContractTransaction(uint256,uint256,address,bytes)"(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  sendL1FundedUnsignedTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)"(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  sendL2Message(
    messageData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendL2Message(bytes)"(
    messageData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendUnsignedTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)"(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  startRewriteAddress(overrides?: Overrides): Promise<ContractTransaction>;

  "startRewriteAddress()"(overrides?: Overrides): Promise<ContractTransaction>;

  stopRewriteAddress(overrides?: Overrides): Promise<ContractTransaction>;

  "stopRewriteAddress()"(overrides?: Overrides): Promise<ContractTransaction>;

  unpauseCreateRetryables(overrides?: Overrides): Promise<ContractTransaction>;

  "unpauseCreateRetryables()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>;

    "bridge()"(overrides?: CallOverrides): Promise<string>;

    createRetryableTicket(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createRetryableTicketNoRefundAliasRewrite(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "createRetryableTicketNoRefundAliasRewrite(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "depositEth(uint256)"(
      maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pauseCreateRetryables(overrides?: CallOverrides): Promise<void>;

    "pauseCreateRetryables()"(overrides?: CallOverrides): Promise<void>;

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendContractTransaction(uint256,uint256,address,uint256,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendL1FundedContractTransaction(uint256,uint256,address,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendL2Message(bytes)"(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startRewriteAddress(overrides?: CallOverrides): Promise<void>;

    "startRewriteAddress()"(overrides?: CallOverrides): Promise<void>;

    stopRewriteAddress(overrides?: CallOverrides): Promise<void>;

    "stopRewriteAddress()"(overrides?: CallOverrides): Promise<void>;

    unpauseCreateRetryables(overrides?: CallOverrides): Promise<void>;

    "unpauseCreateRetryables()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    InboxMessageDelivered(
      messageNum: BigNumberish | null,
      data: null
    ): EventFilter;

    InboxMessageDeliveredFromOrigin(
      messageNum: BigNumberish | null
    ): EventFilter;
  };

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    "bridge()"(overrides?: CallOverrides): Promise<BigNumber>;

    createRetryableTicket(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    createRetryableTicketNoRefundAliasRewrite(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "createRetryableTicketNoRefundAliasRewrite(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "depositEth(uint256)"(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    pauseCreateRetryables(overrides?: Overrides): Promise<BigNumber>;

    "pauseCreateRetryables()"(overrides?: Overrides): Promise<BigNumber>;

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendContractTransaction(uint256,uint256,address,uint256,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sendL1FundedContractTransaction(uint256,uint256,address,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendL2Message(bytes)"(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    startRewriteAddress(overrides?: Overrides): Promise<BigNumber>;

    "startRewriteAddress()"(overrides?: Overrides): Promise<BigNumber>;

    stopRewriteAddress(overrides?: Overrides): Promise<BigNumber>;

    "stopRewriteAddress()"(overrides?: Overrides): Promise<BigNumber>;

    unpauseCreateRetryables(overrides?: Overrides): Promise<BigNumber>;

    "unpauseCreateRetryables()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bridge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createRetryableTicket(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    createRetryableTicketNoRefundAliasRewrite(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "createRetryableTicketNoRefundAliasRewrite(address,uint256,uint256,address,address,uint256,uint256,bytes)"(
      destAddr: string,
      arbTxCallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      submissionRefundAddress: string,
      valueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    depositEth(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "depositEth(uint256)"(
      maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    pauseCreateRetryables(overrides?: Overrides): Promise<PopulatedTransaction>;

    "pauseCreateRetryables()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendContractTransaction(uint256,uint256,address,uint256,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sendL1FundedContractTransaction(uint256,uint256,address,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendL2Message(bytes)"(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)"(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    startRewriteAddress(overrides?: Overrides): Promise<PopulatedTransaction>;

    "startRewriteAddress()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stopRewriteAddress(overrides?: Overrides): Promise<PopulatedTransaction>;

    "stopRewriteAddress()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unpauseCreateRetryables(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unpauseCreateRetryables()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
