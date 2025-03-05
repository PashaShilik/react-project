export type Anime = {
  id: number;
  title: string;
  imageUrl: string;
  type: string;
  genres: string[];
  yearStart: number | string;
  yearEnd?: number | string;
  score: number;
};
