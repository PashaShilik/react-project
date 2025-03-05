import React from 'react';
import styles from './commonEmptyBlock.module.scss';

type Props = {
  image?:string,
  text:string
}

export const commonEmptyBlock = ( props:Props ) => {
  const {image, text} = props;

  return (
    <div className={styles.commonEmptyBlock}>
      <p className={styles.commonEmptyBlock__text}>{text}</p>
    </div>
  )
}

