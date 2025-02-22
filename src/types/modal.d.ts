export type initialStateModalReducerType = {
    called_modal_list: Modal[];
    modalItemData: any;
    messageForModal: any;
    feedbackModalInfo: any;
};

export type Modal = {
    modalName: string;
    isModalActive: boolean;
    withOverlay: boolean | undefined;
    withDarkOverlay: boolean | undefined;
};
