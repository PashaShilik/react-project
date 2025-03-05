import React from 'react';
import { IAnime } from '@/types/interfaces/IAnime';
import { Card } from '@/components/Card/Card';
import styles from './cardList.module.scss';

interface CardListProps {
  animeList: Array<IAnime>;
}

export function CardList({ animeList }: CardListProps) {
  return (
    <ul className={styles.card__list}>
      {animeList.map((anime) => (
        <Card key={anime.id} data={anime} />
      ))}
    </ul>
  );
}
