import { Divider } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../Layout";
import styles from "./Minting.module.scss";

import { utils } from "ethers";
import whiteCheck from "../../assets/icons/whitelist-check.png";
import mainGroot from "../../assets/images/main-groot.png";
import nftImg from "../../assets/images/mint-nft-img.png";
import textLogo from "../../assets/images/text-logo.png";
import CommonUtil from "../../CommonUtil";
import WalletPopup from "../../components/WalletPopup";
import DrGrootContract from "../../contracts/DrGrootContract";
import DrGrootMinterContract from "../../contracts/DrGrootMinterContract";
import Wallet from "../../klaytn/Wallet";
import useAsyncEffect from "../../utils/useAsyncEffect";

import { loadTossPayments } from '@tosspayments/payment-sdk';
import Config from "../../Config";
import Alert from "../../components/Alert";
import { useDispatch } from "react-redux";
import { toggleAlertModal } from "../../state/modal";

const Minting = () => {

    const dispatch = useDispatch();

    const [address, setWalletAddress] = useState<string | undefined>(undefined);
    const [whitelist, setWhiteList] = useState(false);

    const [maxSellNumber, setMaxSellNumber] = useState(0);
    const [txLimit, setTxLimit] = useState(0);
    const [sellCount, setSellCount] = useState(0);
    const [publicPrice, setPublicPrice] = useState(0);
    const [whitelistPrice, setWhitelistPrice] = useState(0);

    const [mintCount, setMintCount] = useState(1);

    useAsyncEffect(async () => {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            setWalletAddress(address);
            setWhiteList(await DrGrootMinterContract.whitelists(address));
        }
    });

    useAsyncEffect(async () => setMaxSellNumber((await DrGrootMinterContract.maxSellNumber()).toNumber()));
    useAsyncEffect(async () => setTxLimit((await DrGrootMinterContract.txLimit()).toNumber()));
    useAsyncEffect(async () => setSellCount((await DrGrootMinterContract.sellCount()).toNumber()));
    useAsyncEffect(async () => setPublicPrice(parseFloat(utils.formatEther(await DrGrootMinterContract.publicPrice()))));
    useAsyncEffect(async () => setWhitelistPrice(parseFloat(utils.formatEther(await DrGrootMinterContract.whitelistPrice()))));

    const klayMint = async () => {
        if (await DrGrootContract.paused() === true) {
            alert("아직 민팅중이 아닙니다.");
        } else if ((await DrGrootMinterContract.sellCount()).toNumber() >= maxSellNumber) {
                dispatch(toggleAlertModal());
        } else {
            await DrGrootMinterContract.mintByKlay(mintCount, whitelist);
            setTimeout(() => window.location.href = "/my-nft", 2000);
        }
    };

    const krwMint = async () => {
        if (await DrGrootContract.paused() === true) {
            alert("아직 민팅중이 아닙니다.");
        } else if ((await DrGrootMinterContract.sellCount()).toNumber() >= maxSellNumber) {
            dispatch(toggleAlertModal());
        } else {

            const krw = mintCount * (whitelist ? Config.whitelistKRW : Config.publicKRW);
            const result = await fetch(`${Config.apiURL}/tosspay/order`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    address,
                    quantity: mintCount,
                    krw,
                }),
            });
            const orderId = await result.text();

            const tossPayments = await loadTossPayments(Config.tossClientKey);
            const thisPageURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
            tossPayments.requestPayment('계좌이체', { // 결제 수단 파라미터
                // 결제 정보 파라미터
                amount: krw,
                orderId,
                orderName: `Dr. Groot NFT ${mintCount}개`,
                successUrl: thisPageURL,
                failUrl: thisPageURL,
            });
        }
    };

    useAsyncEffect(async () => {
        const params = new URLSearchParams(window.location.search);

        // 오류 발생
        if (params.get("code") !== null) {
            alert(params.get("message"));
        }

        else if (params.get("paymentKey") !== null) {
            const result = await fetch(`${Config.apiURL}/tosspay/mint`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentKey: params.get("paymentKey"),
                    orderId: params.get("orderId"),
                    amount: parseInt(params.get("amount") as string, 10),
                }),
            });
            const message = await result.text();
            if (message === "") { // 완료
                window.location.href = "/my-nft";
            } else {
                alert(message);
            }
        }
    }, []);

    return (
        <Layout>
            <Helmet title="Minting" />
            <Alert/>
            <section className={styles.mintingView}>
                <img className={styles.nftImg} src={nftImg} alt="minting-nft-img" />
                <section className={styles.mintingContainer}>
                    <div className={styles.content}>
                        <img className={styles.mainGroot} src={mainGroot} alt="main-groot" />
                        <img className={styles.textLogo} src={textLogo} alt="text-logo" />
                        <h6 className={styles.title}>GENERATIVE NFT</h6>
                    </div>
                    <div className={styles.mintingContent}>
                        <dl className={styles.mintInfoContainer}>
                            <dd className={styles.infoContainer}>
                                <p className={styles.title}>연결된 지갑 주소</p>
                                <div className={styles.walletInfo}>
                                    <p className={styles.caption}>{address === undefined ? "-" : CommonUtil.shortenAddress(address)}</p>
                                    {whitelist ?
                                        <p className={styles.whitelistCaption}>
                                            <img className={styles.checkImg} src={whiteCheck} alt="whiteCheck" />화이트리스트
                                        </p>
                                        : null}
                                </div>
                            </dd>
                            <dd className={styles.infoContainer}>
                                <p className={styles.title}>실시간 민팅 완료</p>
                                <p className={styles.caption}>{CommonUtil.numberWithCommas(String(sellCount))} / {CommonUtil.numberWithCommas(String(maxSellNumber))}</p>
                            </dd>
                            <dd className={styles.infoContainer}>
                                <p className={styles.title}>구매 가격</p>
                                <p className={styles.caption}>{whitelist ? `${whitelistPrice} KLAY / 25,000 원` : `${publicPrice} KLAY / 29,000 원`}</p>
                            </dd>
                            <dd className={styles.infoContainer}>
                                <p className={styles.title}>구매 가능 수량</p>
                                <p className={styles.caption}>{CommonUtil.numberWithCommas(String(maxSellNumber - sellCount < 0 ? 0 : maxSellNumber - sellCount))}</p>
                            </dd>
                        </dl>
                        <Divider sx={{ marginTop: { lg: "22px", sx: "19px" }, marginBottom: "20px", border: "solid 1px #bebebe" }} />
                        <div className={styles.buyContainer}>
                            <p className={styles.title}>구매 수량 입력</p>
                            <input className={styles.buyAmount} value={mintCount} type="number" onChange={(event) => {
                                const count = parseInt(event.target.value, 10);
                                setMintCount(count > txLimit ? txLimit : (count < 1 ? 1 : count));
                            }} />
                        </div>
                        <div className={styles.buttonContainer}>
                            <a className={address === undefined ? undefined : styles.on} onClick={klayMint}>클레이로 결제하기</a>
                            <a className={address === undefined ? undefined : styles.on} onClick={krwMint}>원화로 결제하기</a>
                        </div>
                        <span className={styles.warningContainer}>
                            원화결제의 경우에는 금감원 방침에 따로 오직 뱅크페이 계좌이체를 통해서만 결제가 이루워집니다. 미리 뱅크페이 결제수단을 등록한 경우에 더 간편하게 결제할 수 있습니다.
                        </span>
                    </div>
                </section>
            </section>
            {Wallet.installed === true ? undefined : <WalletPopup />}
        </Layout>
    );
};

export default Minting;