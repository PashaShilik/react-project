import React from "react";
import { useNavigate } from "react-router-dom";
import { IAnime } from "../../types/interfaces/IAnime";
import styles from "./card.module.scss"
import { ROUTES } from "../../routes/routes";

interface CardProps {
    anime: IAnime
}

export function Card({ anime }: CardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`${ROUTES.viewCard}/${anime.id}`);
    };

    const { imageUrl, title, genres, yearStart, yearEnd, description } = anime;
    const ongoing: string | number = !yearEnd ? "ongoing" : yearEnd; // для аниме, которое еще выпускается

    return (
        <li
            className={styles.card}
            onClick={handleClick}>
            <img className={styles.card__img} src={imageUrl} alt={title} />
            <div className={styles.card__info}>
                <h3 className={styles.card__info_title}>{title}</h3>
                <span className={styles.card__info_genre}>Genres: {genres}</span>
                <span className={styles.card__info_year}>Released: {yearStart}</span>
                <span className={styles.card__info_year}>Ended: {ongoing}</span>
                <p className={styles.card__info_description}>{description}</p>
            </div>
        </li>
    );
}