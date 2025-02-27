import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

import logo from '@/assets/img/logo.png';
import userIco from '@/assets/svg/user.svg';
import favoritesIco from '@/assets/img/favorites.png';

import {CommonButton} from '@/components/Common/CommonButton/CommonButton';
import { ROUTES } from '@/routes/routes';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '@/redux/reducers/userReducer/userSelector';
import { useAppDispatch } from '@/redux/store';
import { setAuthInfo, setIsAuth } from '@/redux/reducers/userReducer/userReducer';

export const Header = function () {
  const navigate = useNavigate(); 
  const [isScrolled, setIsScrolled] = useState(false);
  const isUserAuth = useSelector(isAuthSelector);
  const dispatch = useAppDispatch();
  const usersData = localStorage.getItem('AuthMe');
  const user = usersData ? JSON.parse(usersData) : [];

  const handleLoginClick = () => {
    navigate(ROUTES.signin);
  };

  const handleRegisterClick = () => {
    navigate(ROUTES.signup);
  };

  const handleFavoritesClick = () => {
    navigate(ROUTES.favorites);
  };

  const handleLogOut = () => {
    localStorage.removeItem('AuthMe')
    dispatch(setIsAuth({isAuth:false}))
    dispatch(setAuthInfo({}))
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const authContent = isUserAuth ? (
    <div className={styles.header__auth_container}>
        <img src={favoritesIco} alt="favoritesIco" className={styles.header__favorites_img} onClick={handleFavoritesClick}/>
      <div className={styles.header__user_data}>
        <img src={userIco} alt="userIco" className={styles.header__user_img} />
        <p className={styles.header__login_text}>@{user.login}</p> 
      </div>
      <CommonButton text='Выход' type='default_bg' onClick={handleLogOut} />
    </div>
  ) : (
    <div className={styles.header__button_container}>
      <CommonButton text='Entrance' type='default_bg' onClick={handleLoginClick}/>
      <CommonButton text='Registration' type='default_bg' onClick={handleRegisterClick}/>
    </div>
  );

  return (
    <div className={`${styles.header} ${isScrolled ? styles.header_scroll : ''}`}>
      <div className={styles.header__container}>
        <Link to={ROUTES.home} className={styles.header__logo_container}>
          <img src={logo} alt="logo" className={styles.header__logo_img} />
        </Link>
        {authContent}
      </div>
    </div>
  );
}
