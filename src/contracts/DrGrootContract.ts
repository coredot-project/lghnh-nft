import { BigNumber, BigNumberish } from "ethers";
import Config from "../Config";
import DrGrootArtifact from "./abi/artifacts/contracts/DrGroot.sol/DrGroot.json";
import Contract from "./Contract";

class DrGrootContract extends Contract {

    constructor() {
        super(Config.contracts.DrGroot, DrGrootArtifact.abi);
    }

    public async paused(): Promise<boolean> {
        return await this.runMethod("paused");
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner));
    }

    public async tokenOfOwnerByIndex(owner: string, index: BigNumberish): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("tokenOfOwnerByIndex", owner, index));
    }
}

export default new DrGrootContract();
