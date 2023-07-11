import { Card, CardActionArea } from "@mui/material";
import { useHistory } from 'react-router-dom';
import React from "react";

import styles from "./NftItem.module.scss";

interface NftItemProps {
    id: number;
}

const NftItem = (props: NftItemProps) => {
    const history = useHistory();

    return (
        <Card sx={{ width: 287 }}>
            <CardActionArea sx={{ padding: "20px" }} onClick={() => { history.push(`/nft/${props.id}`) }}>
                <div className={styles.imgContainer}>
                    <img src={`https://storage.googleapis.com/drgroot/drgroot_image/drgroot_${props.id}.png`} alt="nft" />
                </div>
                <div className={styles.textContainer}>
                    <p>닥터 그루트</p>
                    <p>#{props.id}</p>
                </div>
            </CardActionArea>
        </Card >
    )
}

export default NftItem;