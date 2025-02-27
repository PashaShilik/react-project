import React from "react";
import { useNavigate } from "react-router-dom";
import { IAnime } from "@/types/interfaces/IAnime";
import styles from "./card.module.scss"
import { ROUTES } from "@/routes/routes";
import { BookMark } from "./BookMark/BookMark";

interface CardProps {
    anime: IAnime
}

export function Card({ anime }: CardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${ROUTES.viewCard}/${anime.id}`);
    };

    const { imageUrl, title, genres, yearStart, yearEnd, score } = anime;

    return (
        <li
            className={styles.card}
            onClick={handleClick}>
            <img className={styles.card__img} src={imageUrl} alt={title} />
            <div className={styles.card__score}>★ {score}</div>
            <BookMark />
            <div className={styles.card__info}>
                <div className={styles.card__info_year}>
                    <span className={styles.card__info_year_from}>From: {yearStart}</span>  
                    <span className={styles.card__info_year_to}>To: {yearEnd}</span>
                </div>
                <h3 className={styles.card__info_title}>{title}</h3>
                <span className={styles.card__info_genre}>Genres: {genres}</span>
                {/* <p className={styles.card__info_description}>{description}</p> */}
            </div>
        </li>
    );
}