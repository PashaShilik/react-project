import React from 'react';
import styles from './popupWithoutOverlay.module.scss';
import Portal from '../Portal/Portal';

type Props = {
  children:any;
  onClose: Function;
  isOpen:boolean;
}


function PopupWithoutOverlay({children, onClose, isOpen}:Props) {

  if(!isOpen) return null;

  return (
  <Portal>
    <div className={styles.popupWithoutOverlay} role='dialog'>
      <div className={styles.popupWithoutOverlay__overlay} role='button' onClick={() => onClose()}/>
      <div className={styles.popupWithoutOverlay__content}>{children}</div>
    </div>
  </Portal>
  )
}

export default PopupWithoutOverlay
