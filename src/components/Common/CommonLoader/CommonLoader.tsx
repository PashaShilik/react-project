import React from 'react';
import styles from './commonLoader.module.scss';
import loader from '../../../assets/img/loader.webp';

type Props = {
    className?: string;
}

function CommonLoader({ className }:Props) {
  return (
    <img className={`${styles.commonLoader} ${className}`} src={loader} alt='loader' />
  )
}

export default CommonLoader
