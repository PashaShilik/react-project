import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './historyItemBlock.module.scss';
import SearchIcon from '@/assets/svg/Search.svg';
import TrashIcon from '@/assets/svg/can-trash.svg';
import { HistoryItemBlockProps } from '@/types/history';
import { DetailsBlock } from './../DetailsBlock/DetailsBlock';
import { getDetails } from '@/utils/transformHistoryItem';
import { convertHistoryItemToQueryString } from '@/utils/history/convertHistoryItemToQueryString';

export const HistoryItemBlock: React.FC<HistoryItemBlockProps> = ({ item, index, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(index);
  };

  const handleSearch = () => {
    const queryString = convertHistoryItemToQueryString(item);
    navigate(`/search?${queryString}`);
  };

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
            onClick={handleSearch}
          />
          <img
            src={TrashIcon}
            alt="Delete"
            className={styles.historyItemBlock__icon}
            title="Delete search history"
            onClick={handleDelete}
          />
        </div>
      </div>
      <DetailsBlock details={getDetails(item)} />
    </li>
  );
};
