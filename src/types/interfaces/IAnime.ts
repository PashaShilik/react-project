export interface IAnime {
    id: number;
    title: string;
    imageUrl: string;
    genres: Array<string>;
    yearStart: number | string | null; // год начала выпуска
    yearEnd?: number | string | null; // год окончания выпуска
    description: string;
}
