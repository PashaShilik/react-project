import React from 'react';
import styles from './popupWithDarkOverlay.module.scss';
import {Portal} from '../Portal/Portal';

type Props = {
  children:any;
  onClose: () => void;
  isOpen:boolean;
}

export const PopupWithDarkOverlay = function (props:Props) {
  const {children, onClose, isOpen} = props
  if(!isOpen) return null;

  const handleClose = () => {
    onClose()
  };

  return (
    <Portal>
      <div className={styles.popupWithDarkOverlay} role='dialog'>
        <div className={styles.popupWithDarkOverlay__overlay} role='button' onClick={handleClose}/>
        <div className={styles.popupWithDarkOverlay__content}>{children}</div>
      </div>
    </Portal>
  )
}

