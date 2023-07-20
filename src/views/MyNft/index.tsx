import { Container } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet";

import NftItem from "../../components/NftItem";
import DrGrootContract from "../../contracts/DrGrootContract";
import Wallet from "../../klaytn/Wallet";
import useAsyncEffect from "../../utils/useAsyncEffect";
import Layout from "../Layout";
import styles from "./MyNft.module.scss";

const MyNft = () => {
    // const [open, setOpen] = useState(false);

    // const handleClick = () => {
    //     setOpen(!open);
    // };

    const [tokenIds, setTokenIds] = useState<number[] | undefined>(undefined);

    useAsyncEffect(async () => {
        if (tokenIds === undefined) {
            setTokenIds([]);
            if (await Wallet.connected() !== true) {
                await Wallet.connect();
            }
            const address = await Wallet.loadAddress();
            if (address !== undefined) {
                const promises: Promise<void>[] = [];
                const balance = await DrGrootContract.balanceOf(address);
                const tokenIds: number[] = [];
                for (let i = 0; i < balance.toNumber(); i += 1) {
                    const promise = async (index: number) => {
                        const tokenId = await DrGrootContract.tokenOfOwnerByIndex(address, index);
                        tokenIds.push(tokenId.toNumber());
                    };
                    promises.push(promise(i));
                }
                await Promise.all(promises);
                setTokenIds(tokenIds);
            }
        }
    });

    return (
        <Layout>
            <Helmet title="My NFT" />
            <section className={styles.myNftView}>
                <Container maxWidth="xl">
                    <div className={styles.titleContainer}>
                        <h6 className={styles.title}>My NFT</h6>
                        {/* <div className="search-container">
                            <div className="filter-list">
                                <button className="my-nft-button" onClick={handleClick}>
                                    My Page
                                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                </button>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding sx={{ backgroundColor: "#fff" }}>
                                        <ListItemButton sx={{ border: "solid 1px #666" }}>
                                            <ListItemText primary="Dr.Groot" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </div>
                            <input className="search-input" placeholder="Search" />
                        </div> */}
                    </div>
                    <hr className={styles.topDivider} />
                    <div className={styles.gridContainer}>
                        {tokenIds?.map((tokenId) => <NftItem key={tokenId} id={tokenId} />)}
                    </div>
                    <hr className={styles.bottomDivider} />
                </Container>
            </section>
        </Layout>
    );
};

export default MyNft;