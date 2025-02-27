import React from 'react';
import styles from './MovieDetails.module.scss';
import { IMovieData } from '@/types/interfaces/IMovieData';

interface MovieDetailsProps {
  movieData: IMovieData;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movieData }) => {
  return (
    <div className={styles.movieDetails}>
      <p className={styles.movieDetails__detail}><strong>Year:</strong> {movieData.year}</p>
      <p className={styles.movieDetails__detail}><strong>Rating:</strong> {movieData.rating}</p>
      <p className={styles.movieDetails__detail}><strong>Rank:</strong> {movieData.rank}</p>
      <p className={styles.movieDetails__detail}><strong>Score:</strong> {movieData.score}</p>
      <p className={styles.movieDetails__detail}><strong>Scored:</strong> {movieData.scored}</p>
      <p className={styles.movieDetails__detail}><strong>Popularity:</strong> {movieData.popularity}</p>
      <p className={styles.movieDetails__detail}><strong>Members:</strong> {movieData.members}</p>
      <p className={styles.movieDetails__detail}><strong>Favorites:</strong> {movieData.favorites}</p>
      <p className={styles.movieDetails__detail}><strong>Episodes:</strong> {movieData.episodes}</p>
      <p className={styles.movieDetails__detail}><strong>Source:</strong> {movieData.source}</p>
      <p className={styles.movieDetails__detail}><strong>Season:</strong> {movieData.season}</p>
      <p className={styles.movieDetails__detail}><strong>Duration:</strong> {movieData.duration}</p>
    </div>
  );
};