import React from "react";
import Slider from "react-slick";
import { useDispatch } from 'react-redux';

import { useAppSelector } from "../../state/hooks";
import { setEpIndex, toggleEpModal } from "../../state/modal";

import WorldModal from "../WorldModal";

import arrowRight from "../../assets/icons/arrow-r.png";
import arrowLeft from "../../assets/icons/arrow-l.png";
import card1 from "../../assets/images/world-view-card1.png";
import card2 from "../../assets/images/world-view-card2.png";
import card3 from "../../assets/images/world-view-card3.png";
import card4 from "../../assets/images/world-view-card4.png";
import card5 from "../../assets/images/world-view-card5.png";
import card6 from "../../assets/images/world-view-card6.png";
import card7 from "../../assets/images/world-view-card7.png";
import card8 from "../../assets/images/world-view-card8.png";
import card9 from "../../assets/images/world-view-card9.png";
import card10 from "../../assets/images/world-view-card10.png";
import worldArrow from "../../assets/icons/btn-world-arrow-nor.png";

import styles from "./WorldSilder.module.scss";

export const worldViewItems = [
    {
        name: "땅 밑의 연구소",
        source: card1,
    },
    {
        name: "희망이라 불리는 아이",
        source: card2,
    },
    {
        name: "마이크로바이옴. 사라지다",
        source: card3,
    },
    {
        name: "잃어버린 모발을 찾아서",
        source: card4,
    },
    {
        name: "땅 및의 연구소",
        source: card5,
    },
    {
        name: "땅 및의 연구소",
        source: card6,
    },
    {
        name: "땅 및의 연구소",
        source: card7,
    },
    {
        name: "땅 및의 연구소",
        source: card8,
    },
    {
        name: "땅 및의 연구소",
        source: card9,
    },
    {
        name: "땅 및의 연구소",
        source: card10,
    }
]

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}>
            <img src={arrowRight} alt="arrow_r.png" />
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}>
            <img src={arrowLeft} alt="arrow_l.png" />
        </div>
    );
};

const WorldSlider: React.FC = () => {
    const open = useAppSelector((state) => state.modal.isEpModal);
    const index = useAppSelector((state) => state.modal.episodeIndex);
    const dispatch = useDispatch();

    const handleClick = (index: number) => {
        dispatch(toggleEpModal());
        dispatch(setEpIndex(index));
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    nextArrow: <NextArrow />,
                    prevArrow: <PrevArrow />,
                }
            }
        ]
    };

    return (
        <>
            <a className={styles.viewButton} onClick={() => { handleClick(index) }}>
                첫 화부터 보기
                <img src={worldArrow} alt="btn_world_arrow_nor" />
            </a>
            <div className="world-slider">
                {open ? <WorldModal index={index} /> : null}
                <Slider {...settings}>
                    {worldViewItems.map((item, index) =>
                        <div className="slider-item" onClick={() => { handleClick(index) }}>
                            <img src={item.source} alt={item.name} />
                            <p>{index + 1}화</p>
                        </div>
                    )}
                </Slider>
            </div>
        </>
    )
}

export default WorldSlider;