import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../Layout";

import styles from "./Gallery.module.scss";

import invalidNft from "../../assets/images/invalid-name.png"

const Gallery = () => {

    return (
        <Layout>
            <Helmet title="Gallery" />
            <section className={styles.galleryView}>
                <h6>Gallery</h6>
                <p>
                    <b>지금부터 2,000개의 닥터그루트 제너러티브 아트 NFT</b>를 만나볼 수 있습니다.<br />
                    <b>미공개된 닥터그루트</b> NFT에는 <b>어떤 비밀</b>이 숨어있을지 기대해주세요!
                </p>
                <div className={styles.gridContainer}>
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                    <img src={invalidNft} alt="invalid-nft" />
                </div>
            </section>
        </Layout>
    );
};

export default Gallery;