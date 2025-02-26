import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

import logo from '@/assets/img/logo.png';

import {CommonButton} from '@/components/Common/CommonButton/CommonButton';
import { ROUTES } from '@/routes/routes';

export const Header = function () {

  const navigate = useNavigate(); 
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLoginClick = () => {
    navigate(ROUTES.signin);
  };

  const handleRegisterClick = () => {
    navigate(ROUTES.signup);
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

  return (
    <div className={`${styles.header} ${isScrolled ? styles.header_scroll : ''}`}>
      <div className={styles.header__container}>
        <Link to={ROUTES.home} className={styles.header__logo_container}>
          <img src={logo} alt="logo" className={styles.header__logo_img} />
        </Link>
        <div className={styles.header__button_container}>
          <CommonButton text='Entrance' type='default_bg' onClick={handleLoginClick}/>
          <CommonButton text='Registration' type='default_bg' onClick={handleRegisterClick}/>
        </div>
      </div>
    </div>
  );
}
