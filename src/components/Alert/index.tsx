import { Box, Button, Divider, Modal, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useAppSelector } from "../../state/hooks";
import { toggleAlertModal } from "../../state/modal";

import closeIcon from "../../assets/icons/wallet-popup-btn-close.png";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 640,
    width: "90%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};

const Alert = () => {
    const open = useAppSelector((state) => state.modal.isAlertModal);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleAlertModal());
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClick}
            >
                <Box sx={style}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <div />
                        <Typography sx={{ fontSize: "24.5px", fontWeight: 600 }}>민팅하기</Typography>
                        <img height={24} onClick={handleClick} src={closeIcon} alt="close" style={{ cursor: "pointer" }} />
                    </Box>
                    <Divider sx={{ border: "solid 2px #bebebe", hegiht: "4px", marginTop: "19px", marginBottom: "47px" }} />
                    <Typography sx={{ fontSize: "20.5px", fontWeight: 500, textAlign: "center" }}>2000개의 NFT가 판매완료 되었습니다. <br />성원에 감사합니다.<br /> -Dr.Groot -</Typography>
                    <button onClick={handleClick} style={{ width: "100%", backgroundColor: "#333", color: "#fff", height: "80px", fontSize: "20.5px", fontWeight: "500", marginTop: "50px", border: "none", cursor: "pointer" }}>확인</button>
                </Box>
            </Modal>
        </div >
    )
}

export default Alert;