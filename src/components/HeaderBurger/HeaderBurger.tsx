import React, { useEffect, useState } from 'react';
import styles from './headerBurger.module.scss';

import burgerIcon from '@/assets/svg/burger.svg';
import favoritesIco from '@/assets/img/favorites.png';
import userIco from '@/assets/svg/user.svg';
import historyIco from '@/assets/svg/history-search.svg';
import { useLocation } from 'react-router-dom';
import { CommonButton } from '../Common/CommonButton/CommonButton';

type Props = {
    navHistoryClick: () => void;
    navFavoritesClick: () => void;
    userLogin: string;
    logOutClick: () => void;
    favoritesCount?:number;
}

export const HeaderBurger = (props : Props) => {

    const {navHistoryClick, navFavoritesClick, userLogin, logOutClick, favoritesCount} = props

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); 

    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    const handleBurgerClick = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className={styles.headerBurger}>
      <img src={burgerIcon} alt="icoBurger" onClick={handleBurgerClick} className={styles.headerBurger__ico_burger} />
      {isOpen && (
        <div className={styles.headerBurger__container}>
            <div className={styles.headerBurger__auth_content}>
                <img src={userIco} alt="userIco" className={styles.headerBurger__user_img}/>
                <p className={styles.headerBurger__login_text}>@{userLogin}</p> 
            </div>
            <div className={styles.headerBurger__favorites_content} onClick={navFavoritesClick}>
                <div className={styles.headerBurger__favorites_counter}>{favoritesCount}</div>
                <img src={favoritesIco} alt="favoritesIco" className={styles.headerBurger__favorites_img}/>
                <p >Посмотреть избранное</p>
            </div>
            <div className={styles.headerBurger__history}>
            <img src={historyIco} alt="historySearchIco" className={styles.headerAuth__favorites_img} onClick={navHistoryClick}/>
            <p className={styles.headerBurger__history_text}>Посмотреть историю</p>
            </div>
            <CommonButton text='Выход' type='default_bg' onClick={logOutClick} style={{width:'200px'}}/>
        </div>
      )}
    </div>
  )
}

