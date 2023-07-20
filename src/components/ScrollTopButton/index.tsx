import { Fab } from '@mui/material';
import * as React from 'react';

import "./ScrollTopButton.scss";

const ScrollTopButton = () => {
    return (
        <Fab sx={{ padding: "35px", position: "fixed", right: "20px", bottom: "20px", backgroundColor: "rgba(217, 217, 212)" }}>
            TOP
        </Fab>
    )
}

export default ScrollTopButton;