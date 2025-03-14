export type MovieData = {
  id: number;
  title: string;
  type: string;
  imageUrl: string;
  genres: string;
  yearStart: string;
  yearEnd: string;
  score: number;
  trailer: {
    embed_url: string;
    images: {
      small_image_url: string;
    };
  };
  synopsis: string;
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
};
