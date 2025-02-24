import React from 'react';
import styles from './signinPage.module.scss';

import {CommonButton} from '../../components/Common/CommonButton/CommonButton';
import arrowLeft from '../../assets/svg/arrowLeft.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import {BlockSigninForm} from './Blocks/BlockSigninForm/BlockSigninForm';

export const SigninPage = function () {

  const navigate = useNavigate(); 

  const handleHomeClick = () => {
    navigate(ROUTES.home);
  };
  
  return (
    <div className={styles.signinPage}>
      <div className={styles.signinPage__form_container}>
        <CommonButton text='Go back' type='default_bg_none_img' image={arrowLeft} onClick={handleHomeClick}/>
        <div className={styles.signinPage__form_content}>
            <h3 className={styles.signinPage__form_content_title}>Welcome to the account login page</h3>
            <p className={styles.signinPage__form_content_text}>
              An exquisite entrance: ensure yourself a journey into the world of eternal perfection of anime and everything related to it!
            </p>
            <BlockSigninForm/>
        </div>

      </div>
      <div className={styles.signinPage__bg_container}></div>
    </div>
  )
}

export default SigninPage
