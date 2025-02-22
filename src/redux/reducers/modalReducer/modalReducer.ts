import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Modal, initialStateModalReducerType } from "../../../types/modal";

const initialStateModalReducer = {
    called_modal_list: [] as Modal[],
    detailSuccessMessageForUser: "",
    detailErrorMessageForUser: "",
    modalItemData: {},
    messageForModal: {},
    feedbackModalInfo: null,
} as initialStateModalReducerType;

const modalReducer = createSlice({
    name: "modalReducer",
    initialState: initialStateModalReducer,
    reducers: {
        setModalByName: (
            state,
            action: PayloadAction<{
                isModalActive: boolean;
                modalName?: string | undefined;
                withOverlay?: boolean | undefined;
                withDarkOverlay?: boolean | undefined;
            }>,
        ) => {
        if (action.payload.isModalActive && action.payload.modalName && (action.payload.withDarkOverlay || action.payload.withOverlay)) {
            const newModal = {
            isModalActive: action.payload.isModalActive,
            modalName: action.payload.modalName,
            withOverlay: action.payload.withOverlay,
            withDarkOverlay: action.payload.withDarkOverlay,
            };
            state.called_modal_list.push(newModal);
        }
        }, // сетаем полный обьект: {isModalActive: true, ModalName: 'имя-модалки', WithOverlay: true или false}
        removeModalByName: (state, action: PayloadAction<{ modalName: string }>) => {
            state.called_modal_list = state.called_modal_list.filter((modal) => modal.modalName !== action.payload.modalName);
        }, // указываем имя модалки для закрытия, к примеру modalName: 'modal-success-alert'
        removeLastOpenedModal: (state) => {
            state.called_modal_list.pop();
        },
        removeAllModal: (state) => {
            state.called_modal_list = [];
        },
        setItemOptions: (state, action: PayloadAction<{ id: number, options: any[]  }>) => {
            state.modalItemData = action.payload;
        },
        setMessageModal: (state, action: PayloadAction<any>) => {
            state.messageForModal = action.payload;
        },
        setFeedbackInfo: (state, action: PayloadAction<{ data: any }>) => {
            state.feedbackModalInfo = action.payload.data
        },
    }
});

export default modalReducer.reducer;

export const {
    setModalByName,
    removeModalByName,
    removeAllModal,
    removeLastOpenedModal,
    setItemOptions,
    setMessageModal,
    setFeedbackInfo
} = modalReducer.actions;