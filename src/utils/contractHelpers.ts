import { ethers } from "ethers";
import { simpleRpcProvider } from "./providers";

const getContract = (
    abi: any,
    address: string,
    signer?: ethers.Signer | ethers.providers.Provider
) => {
    const signerOrProvider = signer ?? simpleRpcProvider;
    return new ethers.Contract(address, abi, signerOrProvider);
};