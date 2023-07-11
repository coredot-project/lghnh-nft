import { Box, Divider, Modal, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useAppSelector } from "../../state/hooks";
import { showWalletModal, toggleWalletModal } from "../../state/modal";

import "./WalletPopup.scss";

import klaytnLogo from "../../assets/icons/icon-klaytn.png";
import closeIcon from "../../assets/icons/wallet-popup-btn-close.png";
import Wallet from '../../klaytn/Wallet';
import { useEffect } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 834,
    width: "90%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};

const WalletPopup = () => {
    const open = useAppSelector((state) => state.modal.isWalletModal);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleWalletModal());
    };

    useEffect(() => {
        if (Wallet.installed !== true) {
            dispatch(showWalletModal());
        }
    }, []);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClick}
            >
                <Box sx={style}>
                    <div className="wallet-popup-header">
                        <div />
                        <h6>지갑 연결하기</h6>
                        <img onClick={handleClick} src={closeIcon} alt="close" />
                    </div>
                    <Divider sx={{ border: "solid 1px #bebebe" }} />
                    <div className="wallet-popup-button-container ">
                        <a className="kaikas-button" href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi">
                            <img src={klaytnLogo} alt="klaytn" />
                            카이카스 설치하기
                        </a>
                        {/* <a className="klip-button">
                            <img src={klipLogo} alt="klip" />
                            카카오 클립 연결하기
                        </a> */}
                        <a className="help-button" href="https://dsclabel.gitbook.io/dsc/NFTGUIDE/undefined">지갑 연결 어려워요, 도와주세요!</a>
                        <Typography variant="caption" sx={{ display: { xl: 'none', xs: 'block' } }} > 모바일 환경에서는 카이카스 사용이 어렵습니다.</Typography>
                    </div>
                </Box>
            </Modal>
        </div >
    )
}

export default WalletPopup;