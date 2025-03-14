import React, { useMemo, useState } from 'react';
import styles from './historyPage.module.scss';
import { HistoryItemBlock } from './Blocks/HistoryItemBlock/HistoryItemBlock';
import { getAuthMe, deleteHistoryEntry } from '@/constants/LocalStorageCard/LocalStorageCard';
import { HistoryItem } from '@/types/history';
import { CommonEmptyBlock } from '@/components/Common/CommonEmptyBlock/CommonEmptyBlock';

export function HistoryPage() {
  const authMe = getAuthMe();
  const [historyData, setHistoryData] = useState<HistoryItem[]>(authMe?.History || []);

  const handleDeleteHistoryEntry = (index: number) => {
    deleteHistoryEntry(index);
    setHistoryData((prev) => prev.filter((_, i) => i !== index));
  };

  const historyItems = useMemo(
    () =>
      historyData.reverse().map((item: HistoryItem, index: number) => (
        <HistoryItemBlock key={index} item={item} index={index} onDelete={handleDeleteHistoryEntry}/>
      )),
    [historyData]
  );

  return (
    <div className={styles.historyPage}>
      <div className={styles.historyPage__content_container}>
        <h1 className={styles.historyPage__title}>History ({historyData.length})</h1>
        {historyData.length > 0 ? (
          <ul className={styles.historyPage__list}>
            {historyItems}
          </ul>
        ) : (
          <CommonEmptyBlock text={'History is empty!'} />
        )}
      </div>
    </div>
  );
}
