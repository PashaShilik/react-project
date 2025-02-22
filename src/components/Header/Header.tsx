import React from 'react';
import styles from './header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

import CommonButton from '../Common/CommonButton/CommonButton';
import { ROUTES } from '../../routes/routes';

function Header() {

  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate(ROUTES.signin);
  };

  const handleRegisterClick = () => {
    navigate(ROUTES.signup);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Link to='/' className={styles.header__logo_container}>
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

export default Header;