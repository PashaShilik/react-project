import React from 'react';
import { Anime } from '@/types/interfaces/Anime';
import { Card } from '@/components/Card/Card';
import styles from './cardList.module.scss';

interface CardListProps {
  animeList: Array<Anime>;
}

export function CardList({ animeList }: CardListProps) {
  return (
    <ul className={styles.card__list}>
      {animeList.map((anime) => (
        <Card
          key={anime.id}
          data={anime}
          showBookmark
          showYear
          showTitle
          showGenres
          showScore />
      ))}
    </ul>
  );
}
