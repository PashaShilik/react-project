import React from 'react';
import styles from './detailsBlock.module.scss';
import { DetailItem } from '@/types/interfaces/HistoryData';

interface DetailsBlockProps {
  details: DetailItem[];
}

export const DetailsBlock: React.FC<DetailsBlockProps> = ({ details }) => {
  return (
    <div className={styles.detailsBlock}>
      {details.map((detail, idx) => (
        <div
          key={idx}
          className={styles.detailsBlock__item}
          style={detail.style}
        >
          <div className={styles.detailsBlock__key}>{detail.key}:</div>
          <div className={styles.detailsBlock__value}>{detail.value}</div>
        </div>
      ))}
    </div>
  );
};
