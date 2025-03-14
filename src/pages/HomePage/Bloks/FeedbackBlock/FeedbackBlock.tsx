import React from 'react';
import styles from './feedbackBlock.module.scss';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/routes';
import { CommonButton } from '@/components/Common/CommonButton/CommonButton';
import animeHero from '@/assets/img/animeHero.webp'
import { useSelector } from 'react-redux';
import { isAuthSelector } from '@/redux/reducers/userReducer/userSelector';


export const FeedbackBlock = () => {
    const navigate = useNavigate(); 
    const isUserAuth = useSelector(isAuthSelector);

  const handleLoginClick = () => {
    navigate(ROUTES.signin);
  };
    
  const handleRegisterClick = () => {
    navigate(ROUTES.signup);
  };

  const showButton = !isUserAuth ? (
    <div className={styles.feedbackBlock__button_container}>
      <CommonButton text='Entrance' type='default_bg' onClick={handleLoginClick}/>
      <CommonButton text='Registration' type='default_bg' onClick={handleRegisterClick}/>
    </div>
  ) : null;


  return (
    <div className={styles.feedbackBlock}>
        <div className={styles.feedbackBlock__bg}/>
        <div className={styles.feedbackBlock__content}>
            <div className={styles.feedbackBlock__text_container}>
                <h1 className={styles.feedbackBlock__title}>We hope you enjoyed our educational app!</h1>
                <p className={styles.feedbackBlock__sub_title}>
                Welcome to our landing page, created as part of a 
                training project to demonstrate development skills! 
                Here you will be able to immerse yourself in the fascinating 
                world of anime and expand your knowledge of various aspects of this amazing culture.
                </p>
                {showButton} 
            </div>
            <div className={styles.feedbackBlock__img_container}>
                <img src={animeHero} alt="anime hero" className={styles.feedbackBlock__img_hero} />
            </div>
        </div>
    </div>
  )
}

