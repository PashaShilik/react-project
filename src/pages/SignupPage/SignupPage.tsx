import React, { useEffect } from 'react';
import styles from './signupPage.module.scss';
import {CommonButton} from '@/components/Common/CommonButton/CommonButton';
import arrowLeft from '@/assets/svg/arrowLeft.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import {BlockSignUpForm} from './Blocks/BlockSignUpForm/BlockSignUpForm';
import { LOCAL_STORAGE_KEYS } from '@/constants/LocalStorageKeys/LocalStorageKeys';

function SignupPage() {

  const navigate = useNavigate(); 

  const handleHomeClick = () => {
    navigate(ROUTES.home);
  };

  useEffect(() => {
    const isUsersExists = localStorage.getItem(LOCAL_STORAGE_KEYS.Users);

    if(!isUsersExists){
     localStorage.setItem(LOCAL_STORAGE_KEYS.Users, JSON.stringify([]));
    }

  }, []);

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupPage__form_container}>
        <CommonButton text='Go back' type='default_bg_none_img' image={arrowLeft} onClick={handleHomeClick}/>
          <div className={styles.signupPage__form_content}>
              <h3 className={styles.signupPage__form_content_title}>Welcome to the account registration page</h3>
              <p className={styles.signupPage__form_content_text}>
                To register an account and immerse yourself in the world of exciting anime, fill out the registration form!
              </p>
              <BlockSignUpForm/>
          </div>
      </div>
      <div className={styles.signupPage__bg_container}></div>
    </div>
  )
}

export default SignupPage
