export interface IMovieData {
  id: number;
  title: string;
  type: string;
  description: string;
  imageUrl: string;
  genres: string;
  yearStart: string;
  yearEnd: string;
  homepage: string;
  score: number;
  images: {
    webp: {
      large_image_url: string;
      small_image_url: string;
      image_url: string;
    };
  };
  trailer: {
    embed_url: string;
    images: {
      small_image_url: string;
  }
  };
  synopsis: string;
  year: number;
  rating: string;
  rank: number;
  scored_by: number;
  popularity: number;
  members: number;
  favorites: number;
  episodes: number;
  source: string;
  season: string;
  duration: string;
}