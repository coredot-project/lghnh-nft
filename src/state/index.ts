

import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import modalReducer from "./modal";

const store = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: {
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: true }).concat([logger]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;