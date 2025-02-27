import React, { useState } from 'react';
import styles from './viewCardPage.module.scss';
import { CommonButton } from '../../components/Common/CommonButton/CommonButton';
import { movieData } from '../../constants/movieData/movieData';
import { MovieDetails } from './Blocks/MovieDetails/MovieDetails';

export const ViewCardPage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const checkDescriptionLength = (description: string, maxWords: number = 100) => {
    return description.split(' ').length <= maxWords;
  };

  const isShortDescription = checkDescriptionLength(movieData.synopsis);

  const handleTrailerClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className={styles.viewCardPage}>
      <div className={styles.viewCardPage__container}>
        <h1 className={styles.viewCardPage__title}>{movieData.title}</h1>
        <div className={styles.viewCardPage__movie_card}>
          <div className={styles.viewCardPage__image_container}>
            <img src={movieData.imageUrl} alt={movieData.title} className={styles.viewCardPage__image} />
          </div>
          <MovieDetails movieData={movieData} />
          <div
            className={`${styles.viewCardPage__full_description} ${isExpanded ? styles.viewCardPage__expanded : ''}`}
          >
            <p className={styles.viewCardPage__description_text}>{movieData.synopsis}</p>
          </div>
          {!isShortDescription && (
            <CommonButton
              type='default_bg'
              text={isExpanded ? 'Hide' : 'Show more'}
              onClick={toggleDescription}
              aria-expanded={isExpanded}
            />
          )}
        </div>
      </div>
      <div className={styles.viewCardPage__trailer}>
        <h2 className={styles.viewCardPage__trailer_title}>Trailer</h2>
        {isVideoPlaying ? (
          <iframe
            className={styles.viewCardPage__trailer_media}
            src={movieData.trailerUrl}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        ) : (
          <img
            src={movieData.trailerPreview}
            alt='Trailer Preview'
            className={styles.viewCardPage__trailer_media}
            onClick={handleTrailerClick}
          />
        )}
      </div>
    </div>
  );
};