import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { ModalState } from "../types";

const initialState: ModalState = {
    isEpModal: false,
    isWalletModal: false,
    isAlertModal: false,
    episodeIndex: 0,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showEpModal: (state: ModalState) => {
            state.isEpModal = true;
        },
        toggleEpModal: (state: ModalState) => {
            state.isEpModal = !state.isEpModal;
        },
        showWalletModal: (state: ModalState) => {
            state.isWalletModal = true;
        },
        toggleWalletModal: (state: ModalState) => {
            state.isWalletModal = !state.isWalletModal;
        },
        showAlertModal: (state: ModalState) => {
            state.isAlertModal = true;
        },
        toggleAlertModal: (state: ModalState) => {
            state.isAlertModal = !state.isAlertModal;
        },
        setEpIndex: (state: ModalState, action: PayloadAction<number>) => {
            state.episodeIndex = action.payload;
        }
    },
});

export const { showWalletModal, toggleWalletModal, showEpModal, toggleEpModal, setEpIndex, showAlertModal, toggleAlertModal } = modalSlice.actions;

export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;