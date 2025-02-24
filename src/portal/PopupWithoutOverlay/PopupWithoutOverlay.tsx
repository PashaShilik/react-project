import React from 'react';
import styles from './popupWithoutOverlay.module.scss';
import {Portal} from '../Portal/Portal';

type Props = {
  children:any;
  onClose: Function;
  isOpen:boolean;
}


export const PopupWithoutOverlay = function ({children, onClose, isOpen}:Props) {

  if(!isOpen) return null;

  const handleClose = () => {
    onClose()
  };


  return (
  <Portal>
    <div className={styles.popupWithoutOverlay} role='dialog'>
      <div className={styles.popupWithoutOverlay__overlay} role='button' onClick={handleClose}/>
      <div className={styles.popupWithoutOverlay__content}>{children}</div>
    </div>
  </Portal>
  )
}

