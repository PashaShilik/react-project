import React from "react";
import { useNavigate } from "react-router-dom";
import { IAnime } from "@/types/interfaces/IAnime";
import styles from "./card.module.scss"
import { ROUTES } from "@/routes/routes";
import { BookMark } from "./BookMark/BookMark";
import { getAnimeById } from '@/api/animeApi';
import { LOCAL_STORAGE_KEYS } from "@/constants/LocalStorageKeys/LocalStorageKeys";
import { useAppDispatch } from "@/redux/store";
import { setFavorites } from "@/redux/reducers/userReducer/userReducer";
import { useSelector } from "react-redux";
import { authInfoSelector } from "@/redux/reducers/userReducer/userSelector";

interface CardProps {
    anime: IAnime
}

export function Card({ anime }: CardProps) {
    
    const { imageUrl, title, genres, yearStart, yearEnd, score } = anime;

    const dispatch = useAppDispatch();
    const userFavoritesData = useSelector(authInfoSelector)?.Favorites || [];

    const authMeItem = localStorage.getItem(LOCAL_STORAGE_KEYS.AuthMe);
    const getAuthMe = authMeItem ? JSON.parse(authMeItem) : null;
    
    const usersItem = localStorage.getItem(LOCAL_STORAGE_KEYS.Users);
    const getUsers = usersItem ? JSON.parse(usersItem) : null;

    const navigate = useNavigate();

    const handleClickFavorites = (e: any) => {
        e.stopPropagation();
    
        const updatedFavorites = [...getAuthMe.Favorites, anime];
        localStorage.setItem(LOCAL_STORAGE_KEYS.AuthMe, JSON.stringify({ ...getAuthMe, Favorites: updatedFavorites }));
        const userIndex = getUsers.findIndex((user: any) => user.login === getAuthMe.login);
    
        if (userIndex !== -1) {
            const updatedUser = { ...getUsers[userIndex], Favorites: updatedFavorites };
            const updatedUsers = [...getUsers.slice(0, userIndex), updatedUser, ...getUsers.slice(userIndex + 1)];
            localStorage.setItem(LOCAL_STORAGE_KEYS.Users, JSON.stringify(updatedUsers));
        }
        dispatch(setFavorites({ Favorites: updatedFavorites }));
    };

    const handleClick = () => {
        navigate(`${ROUTES.viewCard}/${anime.id}`);
    };

    return (
        <li className={styles.card} onClick={handleClick}>
            <img className={styles.card__img} src={imageUrl} alt={title} />
            <div className={styles.card__score}>★ {score}</div>
              <BookMark onClick={(e:any)=>handleClickFavorites(e)}/> 
            <div className={styles.card__info}>
                <div className={styles.card__info_year}>
                    <span className={styles.card__info_year_from}>From:<br/> {yearStart}</span>  
                    <span className={styles.card__info_year_to}>To:<br/> {yearEnd}</span>
                </div>
                <h3 className={styles.card__info_title}>{title}</h3>
                <span className={styles.card__info_genres}>Genres: {genres}</span>
            </div>
        </li>
    );
}