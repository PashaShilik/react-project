import React from 'react';
import styles from './pageNotFound.module.scss'
import { CommonEmptyBlock } from '@/components/Common/CommonEmptyBlock/CommonEmptyBlock';

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <CommonEmptyBlock text='Oooops, no such page found!'/>
    </div>
  )
}

export default PageNotFound
