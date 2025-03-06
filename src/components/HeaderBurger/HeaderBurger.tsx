import React, { useEffect, useState } from 'react';
import styles from './headerBurger.module.scss';

import burgerIcon from '@/assets/svg/burger.svg';
import favoritesIco from '@/assets/img/favorites.png';
import userIco from '@/assets/svg/user.svg';
import { useLocation } from 'react-router-dom';
import { CommonButton } from '../Common/CommonButton/CommonButton';

type Props = {
    navFavoritesClick: () => void;
    userLogin: string;
    logOutClick: () => void;
}

export const HeaderBurger = (props : Props) => {

    const {navFavoritesClick, userLogin, logOutClick} = props

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
                <img src={favoritesIco} alt="favoritesIco" className={styles.headerBurger__favorites_img}/>
                <p >Посмотреть избранное</p>
            </div>
            <CommonButton text='Выход' type='default_bg' onClick={logOutClick} style={{width:'200px'}}/>
        </div>
      )}
    </div>
  )
}

