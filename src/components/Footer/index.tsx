import React from "react";

import telegramLogo from "../../assets/icons/icon-tele-nor.png";
import twitterLogo from "../../assets/icons/icon-twitter-nor.png";
import instagramLogo from "../../assets/icons/icon-insta-nor.png";
import discordLogo from "../../assets/icons/icon-discord-nor.png";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.linkContainer}>
                <div className={styles.termContainer}>
                    <a className={styles.item}>
                        서비스이용약관
                    </a>
                    <a className={styles.item}>
                        support@dsclabel.co.kr
                    </a>
                </div>
                <div className={styles.snsContainer}>
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
            </div>
            <div className={styles.incContainer}>
                DSC LABEL Inc.
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.textContainer}>
                    <div>
                        주식회사 디에스씨레이블 | 대표이사 : 권태홍 | 사업자번호 : 838-86-02498 | 개인정보보호책임자 : 권태홍<br />
                        주소 : 서울시 성동구 아차산로5길 26, 802호 | support@dsclabel.co.kr
                    </div>
                    <div className={styles.copyright}>
                        Copyright @2022 DSC LABEL Inc. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;