import React, { useState } from 'react';
import styles from './viewCardPage.module.scss';
import { CommonButton } from '../../components/Common/CommonButton/CommonButton';

const ViewCardPage: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const checkDescriptionLength = (description: string, maxWords: number = 100) => {
    return description.split(' ').length <= maxWords;
  };

  const movieData = {
    id: 5,
    title: `Cowboy Bebop: Knockin' on Heaven's Door`,
    imageUrl: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
    rating: 'R - 17+ (violence & profanity)',
    rank: 46,
    score: 8.75,
    scored: 1005389,
    popularity: 95,
    members: 1945713,
    favorites: 85524,
    episodes: 26,
    source: 'Original',
    season: 'spring',
    year: 1998,
    duration: '24 min per ep',
    synopsis:
      'Lorem ipsum dolor sit amet  consectetur adipisicing elit. Nisi, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, repellat. ',
    trailerUrl: 'https://www.youtube.com/embed/KA_JwkKBtL8?enablejsapi=1&wmode=opaque&autoplay=1',
    trailerPreview: 'https://img.youtube.com/vi/KA_JwkKBtL8/hqdefault.jpg',
  };

  const isShortDescription = checkDescriptionLength(movieData.synopsis);

  let trailerContent;
  if (isVideoPlaying) {
    trailerContent = (
      <iframe
        className={styles.viewCardPage__trailer_media}
        src={movieData.trailerUrl}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    );
  } else {
    trailerContent = (
      <img
        src={movieData.trailerPreview}
        alt='Trailer Preview'
        className={styles.viewCardPage__trailer_media}
        onClick={() => setIsVideoPlaying(true)}
      />
    );
  }

  return (
    <div className={styles.viewCardPage}>
      <div className={styles.viewCardPage__container}>
        <h1 className={styles.viewCardPage__title}>{movieData.title}</h1>
        <div className={styles.viewCardPage__movie_card}>
          <div className={styles.viewCardPage__image_container}>
            <img src={movieData.imageUrl} alt={movieData.title} className={styles.viewCardPage__image} />
          </div>
          <div className={styles.viewCardPage__details}>
            <p className={styles.viewCardPage__detail}><strong>Год:</strong> {movieData.year}</p>
            <p className={styles.viewCardPage__detail}><strong>Рейтинг:</strong> {movieData.rating}</p>
            <p className={styles.viewCardPage__detail}><strong>Rank:</strong> {movieData.rank}</p>
            <p className={styles.viewCardPage__detail}><strong>Score:</strong> {movieData.score}</p>
            <p className={styles.viewCardPage__detail}><strong>Scored:</strong> {movieData.scored}</p>
            <p className={styles.viewCardPage__detail}><strong>Popularity:</strong> {movieData.popularity}</p>
            <p className={styles.viewCardPage__detail}><strong>Members:</strong> {movieData.members}</p>
            <p className={styles.viewCardPage__detail}><strong>Favorites:</strong> {movieData.favorites}</p>
            <p className={styles.viewCardPage__detail}><strong>Episodes:</strong> {movieData.episodes}</p>
            <p className={styles.viewCardPage__detail}><strong>Source:</strong> {movieData.source}</p>
            <p className={styles.viewCardPage__detail}><strong>Season:</strong> {movieData.season}</p>
            <p className={styles.viewCardPage__detail}><strong>Duration:</strong> {movieData.duration}</p>
          </div>
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
        {trailerContent}
      </div>
    </div>
  );
};

export default ViewCardPage;