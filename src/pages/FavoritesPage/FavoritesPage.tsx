import React from 'react';
import styles from './favoritesPage.module.scss'
import { useSelector } from 'react-redux';
import { authInfoSelector } from '@/redux/reducers/userReducer/userSelector';
import { Card } from '@/components/Card/Card';
import { CommonEmptyBlock } from '@/components/Common/CommonEmptyBlock/CommonEmptyBlock';

const FavoritesPage = () => {
  const favorites = useSelector(authInfoSelector)?.Favorites || []; 
  
  return (
    <div className={styles.favoritesPage}>
      {favorites.length ? ( 
        <div className={styles.favoritesPage__content_container}>
          <h3 className={styles.favoritesPage__title}>
            You have added to favorites - {favorites.length} Anime
          </h3>
          <div className={styles.favoritesPage__card_container}>
            {favorites.map((item:any) => (
              <Card key={item.id} anime={item}/>
            ))}
          </div>
        </div>
      ) : (
        <CommonEmptyBlock text={'You have no favorites!'}/>
      )}
    </div>
  );
};

export default FavoritesPage;
