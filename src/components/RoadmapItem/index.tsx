import React from "react";

import styles from "./RoadmapItem.module.scss";

import complete from "../../assets/images/complete.png"

interface RoadmapItemProps {
    image: string;
    percent: number;
    description: string;
    isComplete: boolean;
};

const RoadmapItem = (props: RoadmapItemProps) => {

    return (
        <div className={styles.roadmapItem}>
            <img src={props.image} alt="roadmap" />
            <h6>{props.percent}%</h6>
            <p>{props.description}</p>
            {props.isComplete && <img className={styles.complete} src={complete} alt="isComplete"/> }
        </div>
    )
}

export default RoadmapItem;