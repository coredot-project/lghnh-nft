import React from "react";
import { useDispatch } from "react-redux";
import { Box, Modal, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useAppSelector } from "../../state/hooks";
import { setEpIndex, toggleEpModal } from "../../state/modal";

import closeIcon from "../../assets/icons/wallet-popup-btn-close.png";

import ep1_0 from "../../assets/images/world-modal/EP.1_0.png";
import ep1_1 from "../../assets/images/world-modal/EP.1_1.png";
import ep1_2 from "../../assets/images/world-modal/EP.1_2.png";
import ep1_3 from "../../assets/images/world-modal/EP.1_3.png";

import ep2_0 from "../../assets/images/world-modal/EP.2_0.png";
import ep2_1 from "../../assets/images/world-modal/EP.2_1.png";
import ep2_2 from "../../assets/images/world-modal/EP.2_2.png";
import ep2_3 from "../../assets/images/world-modal/EP.2_3.png";
import ep2_4 from "../../assets/images/world-modal/EP.2_4.png";
import ep2_5 from "../../assets/images/world-modal/EP.2_5.png";
import ep2_6 from "../../assets/images/world-modal/EP.2_6.png";
import ep2_7 from "../../assets/images/world-modal/EP.2_7.png";
import ep2_8 from "../../assets/images/world-modal/EP.2_8.png";

import ep3_0 from "../../assets/images/world-modal/EP.3_0.png";
import ep3_1 from "../../assets/images/world-modal/EP.3_1.png";
import ep3_2 from "../../assets/images/world-modal/EP.3_2.png";
import ep3_3 from "../../assets/images/world-modal/EP.3_3.png";
import ep3_4 from "../../assets/images/world-modal/EP.3_4.png";

import ep4_0 from "../../assets/images/world-modal/EP.4_0.png";
import ep4_1 from "../../assets/images/world-modal/EP.4_1.png";
import ep4_2 from "../../assets/images/world-modal/EP.4_2.png";
import ep4_3 from "../../assets/images/world-modal/EP.4_3.png";
import ep4_4 from "../../assets/images/world-modal/EP.4_4.png";
import ep4_5 from "../../assets/images/world-modal/EP.4_5.png";

import ep5_0 from "../../assets/images/world-modal/EP.5_0.png";
import ep5_1 from "../../assets/images/world-modal/EP.5_1.png";
import ep5_2 from "../../assets/images/world-modal/EP.5_2.png";
import ep5_3 from "../../assets/images/world-modal/EP.5_3.png";
import ep5_4 from "../../assets/images/world-modal/EP.5_4.png";

import ep6_0 from "../../assets/images/world-modal/EP.6_0.png";
import ep6_1 from "../../assets/images/world-modal/EP.6_1.png";
import ep6_2 from "../../assets/images/world-modal/EP.6_2.png";
import ep6_3 from "../../assets/images/world-modal/EP.6_3.png";
import ep6_4 from "../../assets/images/world-modal/EP.6_4.png";
import ep6_5 from "../../assets/images/world-modal/EP.6_5.png";
import ep6_6 from "../../assets/images/world-modal/EP.6_6.png";
import ep6_7 from "../../assets/images/world-modal/EP.6_7.png";
import ep6_8 from "../../assets/images/world-modal/EP.6_8.png";

import ep7_0 from "../../assets/images/world-modal/EP.7_0.png";
import ep7_1 from "../../assets/images/world-modal/EP.7_1.png";
import ep7_2 from "../../assets/images/world-modal/EP.7_2.png";
import ep7_3 from "../../assets/images/world-modal/EP.7_3.png";
import ep7_4 from "../../assets/images/world-modal/EP.7_4.png";
import ep7_5 from "../../assets/images/world-modal/EP.7_5.png";
import ep7_6 from "../../assets/images/world-modal/EP.7_6.png";

import ep8_0 from "../../assets/images/world-modal/EP.8_0.png";
import ep8_1 from "../../assets/images/world-modal/EP.8_1.png";
import ep8_2 from "../../assets/images/world-modal/EP.8_2.png";
import ep8_3 from "../../assets/images/world-modal/EP.8_3.png";
import ep8_4 from "../../assets/images/world-modal/EP.8_4.png";

import ep9_0 from "../../assets/images/world-modal/EP.9_0.png";
import ep9_1 from "../../assets/images/world-modal/EP.9_1.png";
import ep9_2 from "../../assets/images/world-modal/EP.9_2.png";
import ep9_3 from "../../assets/images/world-modal/EP.9_3.png";

import ep10_0 from "../../assets/images/world-modal/EP.10_0.png";
import ep10_1 from "../../assets/images/world-modal/EP.10_1.png";
import ep10_2 from "../../assets/images/world-modal/EP.10_2.png";

import styles from "./WorldModal.module.scss";

const epArray = [
    {
        image: [ep1_0, ep1_1, ep1_2, ep1_3]
    },
    {
        image: [ep2_0, ep2_1, ep2_2, ep2_3, ep2_4, ep2_5, ep2_6, ep2_7, ep2_8]
    },
    {
        image: [ep3_0, ep3_1, ep3_2, ep3_3, ep3_4]
    },
    {
        image: [ep4_0, ep4_1, ep4_2, ep4_3, ep4_4, ep4_5]
    },
    {
        image: [ep5_0, ep5_1, ep5_2, ep5_3, ep5_4]
    },
    {
        image: [ep6_0, ep6_1, ep6_2, ep6_3, ep6_4, ep6_5, ep6_6, ep6_7, ep6_8]
    },
    {
        image: [ep7_0, ep7_1, ep7_2, ep7_3, ep7_4, ep7_5, ep7_6]
    },
    {
        image: [ep8_0, ep8_1, ep8_2, ep8_3, ep8_4]
    },
    {
        image: [ep9_0, ep9_1, ep9_2, ep9_3]
    },
    {
        image: [ep10_0, ep10_1, ep10_2]
    }
]

const ModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 442,
    width: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: "none",
};

interface ModalItemProps {
    index: number;
};


const WorldModal = (props: ModalItemProps) => {
    const open = useAppSelector((state) => state.modal.isEpModal);
    const index = useAppSelector((state) => state.modal.episodeIndex);
    const dispatch = useDispatch();
    const [round, setRound] = React.useState(0);

    const handleClick = () => {
        dispatch(toggleEpModal());
    };

    const handlePrevEp = () => {
        if (0 >= index) {
        } else {
            dispatch(setEpIndex(index - 1));
            setRound(0);
        }
    }

    const handleNextEp = () => {
        if (4 === index) {
        } else {
            dispatch(setEpIndex(index + 1));
            setRound(0);
        }
    }

    const handlePrev = () => {
        if (round >= 1) {
            setRound(round - 1);
        }
    }

    const handleNext = () => {
        if (round === epArray[props.index].image.length - 1) {
        } else {
            setRound(round + 1);
        }
    }

    return (
        <Modal
            open={open}
        >
            <Box sx={ModalStyle}>
                <section className={styles.worldModal}>
                    <div className={styles.content}>
                        <div className={styles.topContainer}>
                            <img className={styles.closeButton} onClick={handleClick} src={closeIcon} alt="close" />
                        </div>
                        <img src={epArray[props.index].image[round]} alt="EP" />
                    </div>
                    <div className={styles.bottomContainer}>
                        <p style={{ cursor: "pointer" }} onClick={handlePrevEp}>이전화 보기</p>
                        <div className={styles.pagenation}>
                            <div>
                                <IconButton onClick={handlePrev}>
                                    <KeyboardArrowLeftIcon />
                                </IconButton>
                            </div>
                            <div>{round + 1}/{epArray[props.index].image.length}</div>
                            <div>
                                <IconButton onClick={handleNext}>
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </div>
                        </div>
                        <p style={{ cursor: "pointer" }} onClick={handleNextEp}>다음화 보기</p>
                    </div>
                </section>
            </Box>
        </Modal>
    )
}

export default WorldModal;