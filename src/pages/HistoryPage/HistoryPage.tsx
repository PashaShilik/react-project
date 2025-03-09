import React, { useMemo } from 'react';
import styles from './historyPage.module.scss';
import { historyData } from '@/constants/historyData/historyData';
import { HistoryItemBlock } from './Blocks/HistoryItemBlock/HistoryItemBlock';

export function HistoryPage() {
  const historyItems = useMemo(
    () => historyData.map((item, index) => (
      <HistoryItemBlock key={index} item={item} index={index} />
    )),
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
