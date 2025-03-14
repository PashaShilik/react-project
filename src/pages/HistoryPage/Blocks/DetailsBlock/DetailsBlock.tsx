import React from 'react';
import styles from './detailsBlock.module.scss';
import { DetailsBlockProps } from '@/types/history';

export const DetailsBlock: React.FC<DetailsBlockProps> = ({ details }) => {
  return (
    <div className={styles.detailsBlock}>
      {details.map((detail, id) => (
        <div key={id}className={styles.detailsBlock__item} style={detail.style}>
          <div className={styles.detailsBlock__key}>{detail.key}:</div>
          <div className={styles.detailsBlock__value}>{detail.value}</div>
        </div>
      ))}
    </div>
  );
};
