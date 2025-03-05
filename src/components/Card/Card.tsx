import React from "react";
import { useNavigate } from "react-router-dom";
import { UniversalData, isAnime, isCharacter } from "@/types/interfaces/universalData";
import styles from "./card.module.scss";
import { ROUTES } from "@/routes/routes";
import { BookMark } from "./BookMark/BookMark";

export interface CardProps {
    data: UniversalData;
    showScore?: boolean;
    showBookmark?: boolean;
    showYear?: boolean;
    showTitle?: boolean;
    showGenres?: boolean;
}

export function Card({
    data,
    showScore = false,
    showBookmark = false,
    showYear = false,
    showTitle = false,
    showGenres = false,
}: CardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (isAnime(data)) {
            navigate(`${ROUTES.viewCard}/${data.id}`);
        }
    };

    const imageUrl = isAnime(data)
        ? data.imageUrl
        : data.images?.webp?.image_url || "";

    return (
        <li className={styles.card} onClick={handleClick}>
            <img
                className={styles.card__img}
                src={imageUrl}
                alt={isAnime(data) ? data.title : data.name}
                style={{ cursor: isCharacter(data) ? "default" : "pointer" }}
            />

            {isAnime(data) && (
                <>
                    {showScore && <div className={styles.card__score}>★ {data.score}</div>}
                    {showBookmark && <BookMark />}
                    <div className={styles.card__info}>
                        {showYear && (
                            <div className={styles.card__info_year}>
                                <span className={styles.card__info_year_from}>
                                    <span>From:</span>
                                    <span>{data.yearStart}</span>
                                </span>
                                <span className={styles.card__info_year_to}>
                                    <span>To:</span>
                                    <span>{data.yearEnd}</span>
                                </span>
                            </div>
                        )}
                        {showTitle && <h3 className={styles.card__info_title}>{data.title}</h3>}
                        {showGenres && (
                            <span className={styles.card__info_genres}>
                                Genres: {Array.isArray(data.genres) ? data.genres.join(", ") : "No genres available"}
                            </span>
                        )}
                    </div>
                </>
            )}

            {isCharacter(data) && (
                <div className={styles.card__info}>
                    {showTitle && <h3 className={styles.card__info_title}>{data.name}</h3>}
                </div>
            )}
        </li>
    );
}
