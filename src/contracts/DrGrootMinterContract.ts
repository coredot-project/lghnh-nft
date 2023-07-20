import { BigNumber } from "ethers";
import Config from "../Config";
import DrGrootMinterArtifact from "./abi/artifacts/contracts/DrGrootMinter.sol/DrGrootMinter.json";
import Contract from "./Contract";

class DrGrootMinterContract extends Contract {

    constructor() {
        super(Config.contracts.DrGrootMinter, DrGrootMinterArtifact.abi);
    }

    public async maxSellNumber(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("maxSellNumber"));
    }

    public async txLimit(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("txLimit"));
    }

    public async sellCount(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("sellCount"));
    }

    public async whitelistPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("whitelistPrice"));
    }

    public async publicPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("publicPrice"));
    }

    public async whitelists(addr: string): Promise<boolean> {
        return await this.runMethod("whitelists", addr);
    }

    public async mintByKlay(count: number, wl: boolean): Promise<void> {
        await this.runWalletMethodWithValue((wl ? await this.whitelistPrice() : await this.publicPrice()).mul(count), "mintByKlay", count);
    }
}

export default new DrGrootMinterContract();
