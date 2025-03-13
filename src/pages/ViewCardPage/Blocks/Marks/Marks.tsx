import React from "react";
import { MovieData } from "@/types/interfaces/MovieData";
import { faMedal, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './marks.module.scss';

type Props =  {
    animeData: MovieData | null;
}

export function Marks({ animeData }: Props) {

    return (
        <div className={styles.marks}>
            <span className={styles.marks__item}>{animeData?.rating}</span>
            <span className={styles.marks__item}><FontAwesomeIcon icon={faMedal} /> {animeData?.rank}</span>
            <span className={styles.marks__item}><FontAwesomeIcon icon={faHeart} /> {animeData?.favorites}</span>
            <span className={styles.marks__item}><FontAwesomeIcon icon={faEye} /> {animeData?.members}</span>
            <span className={styles.marks__item}>FHD</span>
        </div>
    )
}