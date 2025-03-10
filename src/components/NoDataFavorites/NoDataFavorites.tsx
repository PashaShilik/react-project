import React from 'react';
import styles from './noDataFavorites.module.scss'

export const NoDataFavorites = () => {
  return (
    <div className={styles.noDataFavorites}>
      У вас нет избранных
    </div>
  )
}