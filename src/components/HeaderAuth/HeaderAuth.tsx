import React from 'react';
import styles from './headerAuth.module.scss';

import favoritesIco from '@/assets/img/favorites.png';
import userIco from '@/assets/svg/user.svg';
import { CommonButton } from '@/components/Common/CommonButton/CommonButton';
import { HeaderBurger } from '@/components/HeaderBurger/HeaderBurger';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { useAppDispatch } from '@/redux/store';
import { LOCAL_STORAGE_KEYS } from '@/constants/LocalStorageKeys/LocalStorageKeys';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '@/redux/reducers/userReducer/userSelector';
import { setAuthInfo, setIsAuth } from '@/redux/reducers/userReducer/userReducer';


export const HeaderAuth = () => {

  const navigate = useNavigate(); 
  const dispatch = useAppDispatch();
  const isUserAuth = useSelector(isAuthSelector);
  const usersData = localStorage.getItem(LOCAL_STORAGE_KEYS.AuthMe);
  const user = usersData ? JSON.parse(usersData) : [];

  const handleFavoritesClick = () => {
    navigate(ROUTES.favorites);
  };
  const handleLogOut = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.AuthMe)
    dispatch(setIsAuth({isAuth:false}))
    dispatch(setAuthInfo({}))
    navigate(ROUTES.home);
  };
  const handleLoginClick = () => {
    navigate(ROUTES.signin);
  };
    
  const handleRegisterClick = () => {
    navigate(ROUTES.signup);
  };
    
  return (
    isUserAuth ? (
      <>
        <div className={styles.headerAuth}>
          <img src={favoritesIco} alt="favoritesIco" className={styles.headerAuth__favorites_img} onClick={handleFavoritesClick}/>
          <div className={styles.headerAuth__data_container}>
            <img src={userIco} alt="userIco" className={styles.headerAuth__user_img} />
            <p className={styles.headerAuth__login_text}>@{user.login}</p> 
          </div>
          <CommonButton text='Exit' type='default_bg' onClick={handleLogOut} style={{width:'100px'}}/>
        </div>
        <HeaderBurger navFavoritesClick={handleFavoritesClick} userLogin={user.login} logOutClick={handleLogOut}/>
      </>
      ) : (
        <div className={styles.headerAuth__button_container}>
          <CommonButton text='Entrance' type='default_bg' onClick={handleLoginClick}/>
          <CommonButton text='Registration' type='default_bg' onClick={handleRegisterClick}/>
        </div>
    )
  );
}

