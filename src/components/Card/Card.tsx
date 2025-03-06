import React from "react";
import { useNavigate } from "react-router-dom";
import { IAnime } from "@/types/interfaces/IAnime";
import styles from "./card.module.scss"
import { ROUTES } from "@/routes/routes";
import { BookMark } from "./BookMark/BookMark";
import { useSelector } from "react-redux";
import { authInfoSelector, isAuthSelector } from "@/redux/reducers/userReducer/userSelector";
import useFavorites from "@/hooks/useFavorites";

interface CardProps {
    anime: IAnime
    favoritesPage?: boolean;
}

export function Card({ anime }: CardProps) {
    
    const { imageUrl, title, genres, yearStart, yearEnd, score } = anime;

    const navigate = useNavigate();
    const isUserAuth = useSelector(isAuthSelector); 
    const favorites = useSelector(authInfoSelector)?.Favorites || [];
    const { isFavorites, handleClickFavorites } = useFavorites(anime, isUserAuth, favorites);

    const handleClick = () => {
        navigate(`${ROUTES.viewCard}/${anime.id}`);
    };

    return (
        <li className={styles.card} onClick={handleClick}>
            <img className={styles.card__img} src={imageUrl} alt={title} />
            <div className={styles.card__score}>★ {score}</div>
              <BookMark onClick={(e:any)=>handleClickFavorites(e)} addFavorite={isFavorites}/> 
            <div className={styles.card__info}>
                <div className={styles.card__info_year}>
                    <span className={styles.card__info_year_from}>From:<br/> {yearStart}</span>  
                    <span className={styles.card__info_year_to}>To:<br/> {yearEnd}</span>
                </div>
                <h3 className={styles.card__info_title}>{title}</h3>
                <span className={styles.card__info_genres}>Genres:{genres}</span>
            </div>
        </li>
    );
}