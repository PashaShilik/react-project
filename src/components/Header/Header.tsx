import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

import logo from '@/assets/img/logo.png';
import { ROUTES } from '@/routes/routes';
import { HeaderAuth } from '../HeaderAuth/HeaderAuth';

export const Header = function () {
  const [isScrolled, setIsScrolled] = useState(false);

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
        <HeaderAuth/>
      </div>
    </div>
  );
}
