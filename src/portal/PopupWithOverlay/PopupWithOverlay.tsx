import React from 'react';
import styles from './popupWithOverlay.module.scss';
import {Portal} from '../Portal/Portal';

type Props = {
  children:any;
  onClose: Function;
  isOpen:boolean;
}

export const PopupWithOverlay = function ({children, onClose, isOpen}:Props) {

  if(!isOpen) return null;
  
  const handleClose = () => {
    onClose()
  };

  return (
    <Portal>
      <div className={styles.popupWithOverlay} role='dialog'>
        <div className={styles.popupWithOverlay__overlay} role='button' onClick={handleClose}/>
        <div className={styles.popupWithOverlay__content}>{children}</div>
      </div>
    </Portal>
  )
}
