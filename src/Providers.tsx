import React, { ReactNode } from 'react';
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";

import { getLibrary } from "./utils/web3React";
import store from "./state";

const Providers = ({ children }: { children: ReactNode }) => {
    const theme = createTheme(
        {
            palette: {
                background: {
                    default: "#fefef2",
                }
            },
            typography: {
                fontFamily: ["EB Garamond", "sans-serif"].join(","),
            },
        },
        []
    );

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </Web3ReactProvider>
    );
};

export default Providers;