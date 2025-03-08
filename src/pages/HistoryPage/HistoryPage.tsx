import React, { useMemo } from 'react';
import styles from './historyPage.module.scss';
import SearchIcon from '@/assets/svg/Search.svg';
import TrashIcon from '@/assets/svg/can-trash.svg';
import { historyData } from '@/constants/historyData/historyData';
import { HistoryItem, DetailItem } from '@/types/interfaces/HistoryData';

const getDetails = (item: HistoryItem): DetailItem[] => {
  return [
    { key: 'Search Input', value: item.searchInput },
    { key: 'Status', value: item.status },
    { key: 'Genres', value: item.genres, style: { backgroundColor: '#FFB83527' } },
    { key: 'From', value: item.start_date, style: { backgroundColor: '#18940F24' } },
    { key: 'To', value: item.end_date, style: { backgroundColor: '#C125252B' } },
    { key: 'Order', value: item.order_by },
    { key: 'Sort', value: item.sort },
  ].filter((detail) => !!detail.value);
};

const renderDetails = (details: DetailItem[]) => {
  return details.map((detail, idx) => (
    <div
      key={idx}
      className={styles.historyPage__detailBlock}
      style={detail.style}
    >
      <div className={styles.historyPage__detailKey}>{detail.key}:</div>
      <div className={styles.historyPage__detailValue}>{detail.value}</div>
    </div>
  ));
};

const renderHistoryItem = (item: HistoryItem, index: number) => {
  const details = getDetails(item);

  return (
    <li key={index} className={styles.historyPage__item}>
      <div className={styles.historyPage__dateContainer}>
        <div className={styles.historyPage__date}>{item.date}</div>
        <div className={styles.historyPage__icons}>
          <img
            src={SearchIcon}
            alt="Search"
            className={styles.historyPage__icon}
            title="Go to search"
          />
          <img
            src={TrashIcon}
            alt="Delete"
            className={styles.historyPage__icon}
            title="Delete search history"
          />
        </div>
      </div>
      <div className={styles.historyPage__details}>
        {renderDetails(details)}
      </div>
    </li>
  );
};

export function HistoryPage() {
  const historyItems = useMemo(
    () => historyData.map((item, index) => renderHistoryItem(item, index)),
    [historyData]
  );

  return (
    <div className={styles.historyPage}>
      <h1 className={styles.historyPage__title}>История поиска</h1>
      <ul className={styles.historyPage__list}>
        {historyItems}
      </ul>
    </div>
  );
}