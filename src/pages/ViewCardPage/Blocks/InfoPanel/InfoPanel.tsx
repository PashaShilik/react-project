import React from 'react';
import { MovieData } from '@/types/interfaces/MovieData';
import styles from './infoPanel.module.scss';

type Props = {
    animeData: MovieData | null;
}

export function InfoPanel({ animeData }: Props) {
    if (!animeData) return null;
    return (
        <div className={styles.info__panel}>
            <h3 className={styles.info__panel_title}>Main info:</h3>
            <div className={styles.info__panel_block}>
                <p className={styles.info__panel_item}><b>Year start:</b> {animeData?.yearStart}</p>
                <p className={styles.info__panel_item}><b>Year end:</b> {animeData?.yearEnd}</p>
                <p className={styles.info__panel_item}><b>Duration:</b> {animeData?.duration}</p>
                <p className={styles.info__panel_item}><b>Score:</b> {animeData?.score}</p>
                <p className={styles.info__panel_item}>
                    <b>Genres: </b>
                    <span>{animeData?.genres}</span>
                </p>
            </div>
        </div>
    )
}


