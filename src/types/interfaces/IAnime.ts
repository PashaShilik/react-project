export interface IAnime {
    id: number;
    title: string;
    imageUrl: string;
    type: string;
    genres: Array<string>;
    yearStart: number | string; // год начала выпуска
    yearEnd?: number | string; // год окончания выпуска
    description: string;
}
