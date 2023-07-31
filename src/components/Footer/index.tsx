import React from "react";

import twitterLogo from "../../assets/icons/icon-twitter-nor.png";
import emailLogo from "../../assets/icons/icon-email-nor.png";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.linkContainer}> 
                <div className={styles.snsContainer}>
                    <a className={styles.item} href="mailto:lghnh_nft@lghnh.com" target="_blank" rel="noreferrer">
                        <img src={emailLogo} alt="email" />
                    </a>
                    <a className={styles.item} href="https://twitter.com/LGHNH_NFT" target="_blank" rel="noreferrer">
                        <img src={twitterLogo} alt="twitter" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;