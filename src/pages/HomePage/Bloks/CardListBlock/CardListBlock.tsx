import React, { useState, useEffect } from 'react';
import { getAnimeList } from '@/api/animeApi';
import { Anime } from '@/types/interfaces/Anime';
import { CardList } from './Blocks/CardList/CardList';
import { CommonLoader } from '@/components/Common/CommonLoader/CommonLoader';
import { CommonButton } from '@/components/Common/CommonButton/CommonButton';
import styles from './cardListBlock.module.scss'

export function CardListBlock() {
  const [animeList, setAnimeList] = useState<Array<Anime>>([]);
  const [page, setPage] = useState(1);
  const [newAnimeLoading, setNewAnimeLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    onRequestAnime();
  }, []);

  const onRequestAnime = async () => {
    setNewAnimeLoading(true);

    const newAnimeList = await getAnimeList(page);
    if (newAnimeList.length < 9) {
      setHasMore(false);
    }
    setAnimeList(prevList => [...prevList, ...newAnimeList]);
    setNewAnimeLoading(false);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={styles.card__list_block}>
      <CardList animeList={animeList} />
      {newAnimeLoading && <CommonLoader />}
      {hasMore && (
        <CommonButton
          type="default_bg"
          text="Load more"
          onClick={onRequestAnime}
          disabled={newAnimeLoading}
        />
      )}
    </div>
  );
}
