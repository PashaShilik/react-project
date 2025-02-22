import React from 'react';
import styles from './popupWithDarkOverlay.module.scss';
import Portal from '../Portal/Portal';

type Props = {
  children:any;
  onClose: Function;
  isOpen:boolean;
}

function PopupWithDarkOverlay({children, onClose, isOpen}:Props) {

  if(!isOpen) return null;

  return (
    <Portal>
      <div className={styles.popupWithDarkOverlay} role='dialog'>
        <div className={styles.popupWithDarkOverlay__overlay} role='button' onClick={() => onClose()}/>
        <div className={styles.popupWithDarkOverlay__content}>{children}</div>
      </div>
    </Portal>
  )
}

export default PopupWithDarkOverlay
