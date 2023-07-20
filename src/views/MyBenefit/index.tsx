import { Container, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Config from "../../Config";
import CouponTypes from "../../coupon/coupon.types";
import Wallet from "../../klaytn/Wallet";
import useAsyncEffect from "../../utils/useAsyncEffect";

import Layout from "../Layout";
import styles from "./MyBenefit.module.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#f0f0e9",
        color: "#010101",
        fontSize: 17,
        fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
        textAlign: "center",
        fontSize: 17,
    },
}));

const MyBenefit = () => {

    const [coupons, setCoupons] = useState<{ tokenId: number, code: string, type: CouponTypes, copied: boolean | undefined }[] | undefined>(undefined);

    useAsyncEffect(async () => {
        if (coupons === undefined) {
            setCoupons([]);
            if (await Wallet.connected() !== true) {
                await Wallet.connect();
            }
            const signedMessage = await Wallet.signMessage("My Coupon List");
            if (signedMessage !== undefined) {
                const result = await fetch(`${Config.apiURL}/coupon/coupons?signedMessage=${encodeURIComponent(signedMessage)}`);
                setCoupons(await result.json());
            }
        }
    }, []);

    return (
        <Layout>
            <Helmet title="마이혜택" />
            <section className={styles.myBenefitView}>
                <Container maxWidth="xl">
                    <div className={styles.titleContainer}>
                        <h6 className={styles.title}>My 혜택</h6>
                    </div>
                    <hr className={styles.topDivider} />
                    <div className={styles.couponHeader}>
                        <h6 className={styles.title}>My 쿠폰목록</h6>
                    </div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>
                                        <div className={styles.cellText}>번호</div>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <div className={styles.cellText}>쿠폰명</div>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <div className={styles.cellText}>사용 가능 기간</div>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <div className={styles.cellText}>쿠폰 번호</div>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <div className={styles.cellText}>쿠폰 사용</div>
                                    </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {coupons?.map((coupon, index) => {
                                    let couponName;
                                    let couponPeriod;
                                    if (coupon.type === CouponTypes.DISCOUNT_5PERCENT) {
                                        couponName = "닥터그루트 NFT 보유 혜택 5% 할인쿠폰";
                                        couponPeriod = "2023-06-10 ~ 2023-07-09";
                                    } else if (coupon.type === CouponTypes.FIRST_PURCHASER) {
                                        couponName = "[NFT전용] 마이크로바이옴 샴푸 및 키트 교환 쿠폰";
                                        couponPeriod = "2022-07-03 ~ 2022-09-03";
                                    }
                                    return <TableRow>
                                        <StyledTableCell>
                                            <p className={styles.couponId}>{index + 1}</p>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <p className={styles.couponName}>{couponName}</p>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <p className={styles.couponDate}>{couponPeriod}</p>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <div className={styles.couponNumberContainer}>
                                                <p className={styles.couponNumber}>{coupon.code}</p>
                                                <a className={`${styles.tableButton} ${coupon.copied ? styles.on : ""}`} onClick={() => {
                                                    navigator.clipboard.writeText(coupon.code);
                                                    coupon.copied = true;
                                                    setCoupons([...coupons]);
                                                }}>{coupon.copied ? "복사완료" : "복사하기"}</a>
                                            </div>
                                        </StyledTableCell>
                                        <StyledTableCell>
                                            <a className={styles.tableButton} href="https://drgroot.co.kr/" target="_blank" rel="noreferrer">직영몰 바로가기</a>
                                        </StyledTableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <hr className={styles.bottomDivider} />
                </Container>
            </section>
        </Layout>
    );
};

export default MyBenefit;
