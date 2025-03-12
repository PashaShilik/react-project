import { movieDataFormatter } from '@/utils/movieDataFormatter';
import { MovieData } from '@/types/interfaces/MovieData';

describe('movieDataFormatter', () => {
  test('should format movie data with all fields provided', () => {
    const movieData: MovieData = {
      year: 2020,
      rating: 'PG-13',
      rank: 1,
      score: 8.5,
      scored_by: 1000,
      popularity: 100,
      members: 5000,
      favorites: 200,
      episodes: 12,
      source: 'Manga',
      season: 'Summer',
      duration: '2h 30m',
    } as MovieData;

    const result = movieDataFormatter(movieData);

    expect(result).toEqual([
      { key: 'year', label: 'Year', value: 2020 },
      { key: 'rating', label: 'Rating', value: 'PG-13' },
      { key: 'rank', label: 'Rank', value: 1 },
      { key: 'score', label: 'Score', value: 8.5 },
      { key: 'scored_by', label: 'Scored', value: 1000 },
      { key: 'popularity', label: 'Popularity', value: 100 },
      { key: 'members', label: 'Members', value: 5000 },
      { key: 'favorites', label: 'Favorites', value: 200 },
      { key: 'episodes', label: 'Episodes', value: 12 },
      { key: 'source', label: 'Source', value: 'Manga' },
      { key: 'season', label: 'Season', value: 'Summer' },
      { key: 'duration', label: 'Duration', value: '2h 30m' },
    ]);
  });

  test('should format movie data with missing fields', () => {
    const movieData: MovieData = {
      year: null as unknown as number,
      rating: '',
      rank: null as unknown as number,
      score: null as unknown as number,
      scored_by: null as unknown as number,
      popularity: null as unknown as number,
      members: null as unknown as number,
      favorites: null as unknown as number,
      episodes: null as unknown as number,
      source: '',
      season: '',
      duration: '',
    } as MovieData;

    const result = movieDataFormatter(movieData);

    expect(result).toEqual([
      { key: 'year', label: 'Year', value: 'N/A' },
      { key: 'rating', label: 'Rating', value: 'N/A' },
      { key: 'rank', label: 'Rank', value: 'N/A' },
      { key: 'score', label: 'Score', value: 'N/A' },
      { key: 'scored_by', label: 'Scored', value: 'N/A' },
      { key: 'popularity', label: 'Popularity', value: 'N/A' },
      { key: 'members', label: 'Members', value: 'N/A' },
      { key: 'favorites', label: 'Favorites', value: 'N/A' },
      { key: 'episodes', label: 'Episodes', value: 'N/A' },
      { key: 'source', label: 'Source', value: 'N/A' },
      { key: 'season', label: 'Season', value: 'N/A' },
      { key: 'duration', label: 'Duration', value: 'N/A' },
    ]);
  });

  test('should handle empty movie data', () => {
    const movieData = {} as MovieData;

    const result = movieDataFormatter(movieData);

    expect(result).toEqual([
      { key: 'year', label: 'Year', value: 'N/A' },
      { key: 'rating', label: 'Rating', value: 'N/A' },
      { key: 'rank', label: 'Rank', value: 'N/A' },
      { key: 'score', label: 'Score', value: 'N/A' },
      { key: 'scored_by', label: 'Scored', value: 'N/A' },
      { key: 'popularity', label: 'Popularity', value: 'N/A' },
      { key: 'members', label: 'Members', value: 'N/A' },
      { key: 'favorites', label: 'Favorites', value: 'N/A' },
      { key: 'episodes', label: 'Episodes', value: 'N/A' },
      { key: 'source', label: 'Source', value: 'N/A' },
      { key: 'season', label: 'Season', value: 'N/A' },
      { key: 'duration', label: 'Duration', value: 'N/A' },
    ]);
  });
});