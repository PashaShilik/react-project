import { IMovieData } from '@/types/interfaces/IMovieData';

export const movieDataFormatter = (movieData: IMovieData) => {
  return [
    { key: 'year', label: 'Year', value: movieData.year || 'N/A' },
    { key: 'rating', label: 'Rating', value: movieData.rating || 'N/A' },
    { key: 'rank', label: 'Rank', value: movieData.rank || 'N/A' },
    { key: 'score', label: 'Score', value: movieData.score || 'N/A' },
    { key: 'scored_by', label: 'Scored', value: movieData.scored_by || 'N/A' },
    { key: 'popularity', label: 'Popularity', value: movieData.popularity || 'N/A' },
    { key: 'members', label: 'Members', value: movieData.members || 'N/A' },
    { key: 'favorites', label: 'Favorites', value: movieData.favorites || 'N/A' },
    { key: 'episodes', label: 'Episodes', value: movieData.episodes || 'N/A' },
    { key: 'source', label: 'Source', value: movieData.source || 'N/A' },
    { key: 'season', label: 'Season', value: movieData.season || 'N/A' },
    { key: 'duration', label: 'Duration', value: movieData.duration || 'N/A' },
  ];
};