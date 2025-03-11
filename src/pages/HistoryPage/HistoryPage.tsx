import React, { useMemo, useState } from 'react';
import styles from './historyPage.module.scss';
import { HistoryItemBlock } from './Blocks/HistoryItemBlock/HistoryItemBlock';
import { getAuthMe, deleteHistoryEntry } from '@/constants/LocalStorageCard/LocalStorageCard';
import { HistoryItem } from '@/types/history';

export function HistoryPage() {
  const authMe = getAuthMe();
  const [historyData, setHistoryData] = useState<HistoryItem[]>(authMe?.History || []);

  const handleDeleteHistoryEntry = (index: number) => {
    deleteHistoryEntry(index);
    setHistoryData((prev) => prev.filter((_, i) => i !== index));
  };

  const historyItems = useMemo(
    () =>
      historyData.map((item: HistoryItem, index: number) => (
        <HistoryItemBlock
          key={index}
          item={item}
          index={index}
          onDelete={handleDeleteHistoryEntry}
        />
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
