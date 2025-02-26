import React from 'react';
import styles from './feedbackModal.module.scss'
import { useAppDispatch } from '../../../redux/store';
import { useSelector } from 'react-redux';
import { removeModalByName } from '../../../redux/reducers/modalReducer/modalReducer';
import { modalMessageForModal } from '../../../redux/reducers/modalReducer/modalSelector';

import closeIco from '../../../assets/svg/Delete.svg';
import { CommonButton } from '../../../components/Common/CommonButton/CommonButton';

export const FeedbackModal = () => {

  const dispatch = useAppDispatch();
  const message = useSelector(modalMessageForModal);
    
  const handleCloseModal = () => {
    dispatch(removeModalByName({ modalName: 'modal-feedback' }));
  };

  return (
    <div className={styles.feedbackModal} id="feedbackModal">
      <div className={styles.feedbackModal__container}>
        <div className={styles.feedbackModal__close} onClick={handleCloseModal}>
          <img src={closeIco} alt="Close Icon" className={styles.feedbackModal__close_img} />
        </div>
          <div className={styles.feedbackModal__message}>{message}</div>
            <CommonButton text={"Ок"} type='default_bg' onClick={handleCloseModal} />
      </div>
    </div>
  )
}


