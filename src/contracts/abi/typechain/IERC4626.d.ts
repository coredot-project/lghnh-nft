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

interface IERC4626Interface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "asset()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "convertToAssets(uint256)": FunctionFragment;
    "convertToShares(uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "deposit(uint256,address)": FunctionFragment;
    "maxDeposit(address)": FunctionFragment;
    "maxMint(address)": FunctionFragment;
    "maxRedeem(address)": FunctionFragment;
    "maxWithdraw(address)": FunctionFragment;
    "mint(uint256,address)": FunctionFragment;
    "name()": FunctionFragment;
    "previewDeposit(uint256)": FunctionFragment;
    "previewMint(uint256)": FunctionFragment;
    "previewRedeem(uint256)": FunctionFragment;
    "previewWithdraw(uint256)": FunctionFragment;
    "redeem(uint256,address,address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalAssets()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "withdraw(uint256,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "convertToAssets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertToShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "maxDeposit", values: [string]): string;
  encodeFunctionData(functionFragment: "maxMint", values: [string]): string;
  encodeFunctionData(functionFragment: "maxRedeem", values: [string]): string;
  encodeFunctionData(functionFragment: "maxWithdraw", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "previewDeposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewMint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewRedeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "previewWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convertToAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertToShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxRedeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "previewDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Deposit(address,address,uint256,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Withdraw(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export class IERC4626 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC4626Interface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    asset(
      overrides?: CallOverrides
    ): Promise<[string] & { assetTokenAddress: string }>;

    "asset()"(
      overrides?: CallOverrides
    ): Promise<[string] & { assetTokenAddress: string }>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    convertToAssets(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    "convertToAssets(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    convertToShares(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    "convertToShares(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(uint256,address)"(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    maxDeposit(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxAssets: BigNumber }>;

    "maxDeposit(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxAssets: BigNumber }>;

    maxMint(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxShares: BigNumber }>;

    "maxMint(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxShares: BigNumber }>;

    maxRedeem(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxShares: BigNumber }>;

    "maxRedeem(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxShares: BigNumber }>;

    maxWithdraw(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxAssets: BigNumber }>;

    "maxWithdraw(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { maxAssets: BigNumber }>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(uint256,address)"(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    previewDeposit(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    "previewDeposit(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    previewMint(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    "previewMint(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    previewRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    "previewRedeem(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { assets: BigNumber }>;

    previewWithdraw(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    "previewWithdraw(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { shares: BigNumber }>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "redeem(uint256,address,address)"(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    totalAssets(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalManagedAssets: BigNumber }>;

    "totalAssets()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { totalManagedAssets: BigNumber }>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256,address,address)"(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  asset(overrides?: CallOverrides): Promise<string>;

  "asset()"(overrides?: CallOverrides): Promise<string>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  convertToAssets(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "convertToAssets(uint256)"(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  convertToShares(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "convertToShares(uint256)"(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  deposit(
    assets: BigNumberish,
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(uint256,address)"(
    assets: BigNumberish,
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  maxDeposit(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

  "maxDeposit(address)"(
    receiver: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxMint(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

  "maxMint(address)"(
    receiver: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "maxRedeem(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "maxWithdraw(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mint(
    shares: BigNumberish,
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(uint256,address)"(
    shares: BigNumberish,
    receiver: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  previewDeposit(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "previewDeposit(uint256)"(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  previewMint(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "previewMint(uint256)"(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  previewRedeem(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "previewRedeem(uint256)"(
    shares: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  previewWithdraw(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "previewWithdraw(uint256)"(
    assets: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  redeem(
    shares: BigNumberish,
    receiver: string,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "redeem(uint256,address,address)"(
    shares: BigNumberish,
    receiver: string,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

  "totalAssets()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    assets: BigNumberish,
    receiver: string,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256,address,address)"(
    assets: BigNumberish,
    receiver: string,
    owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    asset(overrides?: CallOverrides): Promise<string>;

    "asset()"(overrides?: CallOverrides): Promise<string>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToAssets(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "convertToAssets(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToShares(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "convertToShares(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deposit(uint256,address)"(
      assets: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxDeposit(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

    "maxDeposit(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxMint(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

    "maxMint(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "maxRedeem(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "maxWithdraw(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "mint(uint256,address)"(
      shares: BigNumberish,
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    previewDeposit(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previewDeposit(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewMint(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previewMint(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previewRedeem(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewWithdraw(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previewWithdraw(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeem(uint256,address,address)"(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAssets()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "withdraw(uint256,address,address)"(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Deposit(
      caller: string | null,
      owner: string | null,
      assets: null,
      shares: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;

    Withdraw(
      caller: string | null,
      receiver: string | null,
      owner: string | null,
      assets: null,
      shares: null
    ): EventFilter;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    asset(overrides?: CallOverrides): Promise<BigNumber>;

    "asset()"(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToAssets(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "convertToAssets(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    convertToShares(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "convertToShares(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "deposit(uint256,address)"(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    maxDeposit(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

    "maxDeposit(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxMint(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;

    "maxMint(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxRedeem(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "maxRedeem(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxWithdraw(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "maxWithdraw(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(uint256,address)"(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    previewDeposit(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previewDeposit(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewMint(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previewMint(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previewRedeem(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewWithdraw(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "previewWithdraw(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "redeem(uint256,address,address)"(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalAssets(overrides?: CallOverrides): Promise<BigNumber>;

    "totalAssets()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(uint256,address,address)"(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    asset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "asset()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertToAssets(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "convertToAssets(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    convertToShares(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "convertToShares(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(uint256,address)"(
      assets: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    maxDeposit(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxDeposit(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxMint(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxMint(address)"(
      receiver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxRedeem(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxRedeem(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxWithdraw(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxWithdraw(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(uint256,address)"(
      shares: BigNumberish,
      receiver: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    previewDeposit(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "previewDeposit(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewMint(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "previewMint(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewRedeem(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "previewRedeem(uint256)"(
      shares: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewWithdraw(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "previewWithdraw(uint256)"(
      assets: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeem(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "redeem(uint256,address,address)"(
      shares: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalAssets()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,address,address)"(
      assets: BigNumberish,
      receiver: string,
      owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
