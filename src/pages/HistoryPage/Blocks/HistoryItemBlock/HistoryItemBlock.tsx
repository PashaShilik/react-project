import React from 'react';
import styles from './historyItemBlock.module.scss';
import SearchIcon from '@/assets/svg/Search.svg';
import TrashIcon from '@/assets/svg/can-trash.svg';
import { HistoryItem } from '@/types/interfaces/HistoryData';
import { DetailsBlock } from './../DetailsBlock/DetailsBlock';
import { getDetails } from '@/utils/transformHistoryItem';

interface HistoryItemBlockProps {
  item: HistoryItem;
  index: number;
}

export const HistoryItemBlock: React.FC<HistoryItemBlockProps> = ({ item, index }) => {
  return (
    <li key={index} className={styles.historyItemBlock}>
      <div className={styles.historyItemBlock__dateContainer}>
        <div className={styles.historyItemBlock__date}>{item.date}</div>
        <div className={styles.historyItemBlock__icons}>
          <img
            src={SearchIcon}
            alt="Search"
            className={styles.historyItemBlock__icon}
            title="Go to search"
          />
          <img
            src={TrashIcon}
            alt="Delete"
            className={styles.historyItemBlock__icon}
            title="Delete search history"
          />
        </div>
      </div>
      <DetailsBlock details={getDetails(item)} />
    </li>
  );
};
