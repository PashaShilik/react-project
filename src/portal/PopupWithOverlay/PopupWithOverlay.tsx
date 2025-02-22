import React, { Children } from 'react';
import styles from './popupWithOverlay.module.scss';
import Portal from '../Portal/Portal';

type Props = {
  children:any;
  onClose: Function;
  isOpen:boolean;
}

function PopupWithOverlay({children, onClose, isOpen}:Props) {

  if(!isOpen) return null;
  
  return (
    <Portal>
      <div className={styles.popupWithOverlay} role='dialog'>
        <div className={styles.popupWithOverlay__overlay} role='button' onClick={() => onClose()}/>
        <div className={styles.popupWithOverlay__content}>{children}</div>
      </div>
    </Portal>
  )
}

export default PopupWithOverlay
