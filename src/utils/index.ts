import { Contract } from "@ethersproject/contracts";
import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
    try {
        return getAddress(value);
    } catch {
        return false;
    }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
    const parsed = isAddress(address);
    if (!parsed) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}

// account is not optional
export function getSigner(
    library: Web3Provider,
    account: string
): JsonRpcSigner {
    return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(
    library: Web3Provider,
    account?: string
): Web3Provider | JsonRpcSigner {
    return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(
    address: string,
    ABI: any,
    library: Web3Provider,
    account?: string
): Contract {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }

    return new Contract(
        address,
        ABI,
        getProviderOrSigner(library, account) as any
    );
}

export function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

// get remain days
export const diffDays = (date: any, otherDate: any) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

// get remain Hours
export const diffHours = (date: any, otherDate: any) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60));

// get remain Minute
export const diffMinute = (date: any, otherDate: any) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60));

// get remain Second
export const diffSecond = (date: any, otherDate: any) => Math.ceil(Math.abs(date - otherDate) / (1000));