export type initialStateModalReducerType = {
    called_modal_list: Modal[];
    detailSuccessMessageForUser: string;
    detailErrorMessageForUser: string;
    modalItemData: {};
    messageForModal: {};
    feedbackModalInfo: any;
};

export type Modal = {
    modalName: string;
    isModalActive: boolean;
    withOverlay: boolean | undefined;
    withDarkOverlay: boolean | undefined;
};
