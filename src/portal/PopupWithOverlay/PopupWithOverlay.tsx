import React from 'react';
import styles from './popupWithOverlay.module.scss';
import {Portal} from '../Portal/Portal';

type Props = {
  children:any;
  onClose: () => void;
  isOpen:boolean;
}

export const PopupWithOverlay = function (props:Props) {
  const {children, onClose, isOpen} = props
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
