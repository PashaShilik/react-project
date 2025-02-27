import { RootState } from "@/redux/store";

export const calledModalsSelector = (state: RootState) => {
    return state.modalReducer.called_modal_list;
};

export const AreThereCalledModalSelector = (state: RootState) => {
    return state.modalReducer.called_modal_list?.length > 0;
};

export const modalItemData = (state: RootState) => {
    return state.modalReducer.modalItemData;
};

export const modalMessageForModal = (state: RootState) => {
    return state.modalReducer.messageForModal;
};

export const modalFeedbackInfoForModal = (state: RootState) => {
    return state.modalReducer.feedbackModalInfo;
};