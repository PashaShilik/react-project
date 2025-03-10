import React from 'react';
import styles from './goToEntranceModal.module.scss'
import { useAppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';
import { removeModalByName } from '@/redux/reducers/modalReducer/modalReducer';
import { modalMessageForModal } from '@/redux/reducers/modalReducer/modalSelector';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';

import closeIco from '@/assets/svg/Delete.svg';
import { CommonButton } from '@/components/Common/CommonButton/CommonButton';

export const GoToEntranceModal = () => {

    const navigate = useNavigate(); 
    const dispatch = useAppDispatch();
    const message = useSelector(modalMessageForModal);
    
    const handleCloseModal = () => {
        dispatch(removeModalByName({ modalName: 'modal-GoToEntranceModal' }));
    };

    const handleLoginClick = () => {
        navigate(ROUTES.signin);
        handleCloseModal()
    };

  return (
    <div className={styles.goToEntranceModal} id="goToEntranceModal">
      <div className={styles.goToEntranceModal__container}>
        <div className={styles.goToEntranceModal__close} onClick={handleCloseModal}>
          <img src={closeIco} alt="Close Icon" className={styles.goToEntranceModal__close_img} />
        </div>
          <div className={styles.goToEntranceModal__message}>{message}</div>
            <CommonButton text={"Ок"} type='default_bg' onClick={handleLoginClick} />
      </div>
    </div>
  )
}


