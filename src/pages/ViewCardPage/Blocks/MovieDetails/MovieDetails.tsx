import React from 'react';
import styles from './MovieDetails.module.scss';
import { IMovieData } from '@/types/interfaces/IMovieData';
import { movieDataFormatter } from '@/utils/movieDataFormatter';

interface MovieDetailsProps {
  movieData: IMovieData;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movieData }) => {
  const details = movieDataFormatter(movieData);

  return (
    <div className={styles.movieDetails}>
      {details.map((detail) => (
        <p key={detail.key} className={styles.movieDetails__detail}>
          <strong>{detail.label}:</strong> {detail.value}
        </p>
      ))}
    </div>
  );
};