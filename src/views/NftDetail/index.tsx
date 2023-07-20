import React from "react";
import { Card, Container, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import styles from "./NftDetail.module.scss";
import Layout from "../Layout";

import telegramLogo from "../../assets/icons/icon-tele-sel.png";
import twitterLogo from "../../assets/icons/icon-twitter-sel.png";
import instagramLogo from "../../assets/icons/icon-insta-sel.png";
import discordLogo from "../../assets/icons/icon-discord-sel.png";

const NftDetail = () => {
    let { id } = useParams() as {
        id: string;
    };

    return (
        <Layout>
            <Helmet title={id} />
            <Container maxWidth="xl">
                <section className={styles.nftDetailView}>
                    <div className={styles.titleContainer}>
                        <h6>NFT 상세페이지</h6>
                    </div>
                    <Divider sx={{ border: "solid 1px #bebebe" }} />
                    <div className={styles.nftContent}>
                        <Card sx={{ maxWidth: 520, padding: "20px" }}>
                            <div className={styles.imgContainer}>
                                <img className={styles.grootImg} src={`https://storage.googleapis.com/drgroot/drgroot_image/drgroot_${id}.png`} alt="nft" />
                            </div>
                        </Card>
                        <div className={styles.infoContainer}>
                            <div className={styles.nftSnsContainer}>
                                <a className={styles.item} href="https://t.me/dogesoundclub" target="_blank" rel="noreferrer">
                                    <img src={telegramLogo} alt="telegram" />
                                </a>
                                <a className={styles.item} href="https://twitter.com/dogesoundclub" target="_blank" rel="noreferrer">
                                    <img src={twitterLogo} alt="twitter" />
                                </a>
                                <a className={styles.item} href="https://www.instagram.com/biasedmatecycleshop/" target="_blank" rel="noreferrer">
                                    <img src={instagramLogo} alt="instagram" />
                                </a>
                                <a className={styles.item} href="https://discord.com/invite/dogesoundclub" target="_blank" rel="noreferrer">
                                    <img src={discordLogo} alt="discord" />
                                </a>
                            </div>
                            <Divider sx={{ border: "solid 1px #bebebe", marginTop: "24px", marginBottom: "39px" }} />
                            <div className={styles.nftTitle}>
                                <h6>닥터그루트</h6>
                                <p>#{id}</p>
                            </div>
                            <div className={styles.mixContainer}>
                                {/* <p>쌓여있는 MIX:</p> */}
                                {/* <p>0</p> */}
                            </div>
                            <Divider sx={{ border: "solid 1px #bebebe", marginBottom: "24px" }} />
                            <a className={styles.openseaButton} href={`https://opensea.io/assets/klaytn/0x924902FD4622F8BaF74b4E219f950183674ade9A/${id}`}>오픈씨 확인하기</a>
                        </div>
                    </div>
                </section>
            </Container>
        </Layout >
    );
};

export default NftDetail;