import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers } from "ethers";
import getNodeUrl from "./getRpcUrl";

const rpcUrl = getNodeUrl();
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID!, 10);

export const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
    rpc: { [chainId]: rpcUrl! },
    qrcode: true,
});

export enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
}

export type Login = (connectorId: ConnectorNames) => void;

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
};

export const getLibrary = (
    provider:
        | ethers.providers.ExternalProvider
        | ethers.providers.JsonRpcFetchFunc
): ethers.providers.Web3Provider => {
    const library = new ethers.providers.Web3Provider(provider);
    return library;
};