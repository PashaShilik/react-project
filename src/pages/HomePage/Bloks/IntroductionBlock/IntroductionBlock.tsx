import React from 'react';
import styles from './introductionBlock.module.scss';
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary';
import {SearchBlock} from '@/pages/HomePage/Bloks/SearchBlock/SearchBlock';
import { CommonButton } from '@/components/Common/CommonButton/CommonButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { useSelector } from 'react-redux';
import { isAuthSelector } from '@/redux/reducers/userReducer/userSelector';

export const IntroductionBlock = () => {

  const navigate = useNavigate(); 
  const isUserAuth = useSelector(isAuthSelector);

  const handleLoginClick = () => {
    navigate(ROUTES.signin);
  };
    
  const handleRegisterClick = () => {
    navigate(ROUTES.signup);
  };

  const showButton = !isUserAuth ? (
    <div className={styles.introductionBlock__button_container}>
      <CommonButton text='Entrance' type='default_bg' onClick={handleLoginClick} />
      <CommonButton text='Registration' type='default_bg' onClick={handleRegisterClick} />
    </div>
  ) : null;

  return (
    <div className={styles.introductionBlock}>
        <div className={styles.introductionBlock__bg}/>
        <div className={styles.introductionBlock__content}>
            <h1 className={styles.introductionBlock__title}>Welcome to the world of anime</h1>
            <p className={styles.introductionBlock__sub_title}>
                Welcome to our landing page, created as part of a 
                training project to demonstrate development skills! 
                Here you will be able to immerse yourself in the fascinating 
                world of anime and expand your knowledge of various aspects of this amazing culture.
            </p>
            <div className={styles.introductionBlock__search_block}>
            <ErrorBoundary>
                <SearchBlock/>
            </ErrorBoundary>
            </div>
            {showButton}
        </div>
    </div>
  )
}

