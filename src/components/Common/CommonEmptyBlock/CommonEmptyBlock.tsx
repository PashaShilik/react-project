import React from 'react';
import styles from './commonEmptyBlock.module.scss';
import emptyImage from '@/assets/img/NoFavorites.webp'

type Props = {
  text:string,
  image?:string
}

export const CommonEmptyBlock = ( props:Props ) => {
  const {image={emptyImage}, text} = props;

  return (
    <div className={styles.commonEmptyBlock}>
      <img src={emptyImage} alt="image" className={styles.commonEmptyBlock__image}/>
      <p className={styles.commonEmptyBlock__text}>{text}</p>
    </div>
  )
}

