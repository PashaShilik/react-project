import { calledModalsSelector } from '@/redux/reducers/modalReducer/modalSelector';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeLastOpenedModal } from '@/redux/reducers/modalReducer/modalReducer';

import {PopupWithOverlay} from '@/portal/PopupWithOverlay/PopupWithOverlay';
import {PopupWithDarkOverlay} from '@/portal/PopupWithDarkOverlay/PopupWithDarkOverlay';
import {PopupWithoutOverlay} from '@/portal/PopupWithoutOverlay/PopupWithoutOverlay';
import { modalContainerArr } from '@/constants/ModalContainer/ModalContainer';

export const ModalContainer = function () {
  const dispatch = useDispatch();
  const calledModals = useSelector(calledModalsSelector);

  const handleCloseModal = () => {
    dispatch(removeLastOpenedModal());
  }

  return (
    <>
      {calledModals?.map((called_modal:any, index:number) => {
        if (called_modal.withOverlay){
          return (
            <PopupWithOverlay key={index} onClose={handleCloseModal} isOpen={called_modal.isModalActive}>
              {modalContainerArr.find((modal) => modal.name === called_modal.modalName)?.element}
            </PopupWithOverlay>
          )
        }
        if (called_modal.withDarkOverlay){
          return(
            <PopupWithDarkOverlay key={index} onClose={handleCloseModal} isOpen={called_modal.isModalActive}>
              {modalContainerArr.find((modal) => modal.name === called_modal.modalName)?.element}
            </PopupWithDarkOverlay>
          )
        }
        return (
          <PopupWithoutOverlay key={index} onClose={handleCloseModal} isOpen={called_modal.isModalActive}>
            {modalContainerArr.find((modal) => modal.name === called_modal.modalName)?.element}
          </PopupWithoutOverlay>
        )
      })}
    </>
  )
}

