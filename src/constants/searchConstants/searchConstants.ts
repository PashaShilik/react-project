import {animeGenreType, animeOrderByType, animeStatusType, animeYearType} from "@/types/search";

export const ANIME_GENRES: animeGenreType[] = [
    {id: 1, type: "anime", name: "Action", title: "Action"},
    {id: 2, type: "anime", name: "Adventure", title: "Adventure"},
    {id: 4, type: "anime", name: "Comedy", title: "Comedy"},
    {id: 7, type: "anime", name: "Mystery", title: "Mystery"},
    {id: 8, type: "anime", name: "Drama", title: "Drama"},
    {id: 10, type: "anime", name: "Fantasy", title: "Fantasy"},
    {id: 13, type: "anime", name: "Historical", title: "Historical"},
    {id: 14, type: "anime", name: "Horror", title: "Horror"},
    {id: 22, type: "anime", name: "Romance", title: "Romance"},
    {id: 24, type: "anime", name: "Sci-Fi", title: "Sci-Fi"},
    {id: 30, type: "anime", name: "Sports", title: "Sports"},
    {id: 37, type: "anime", name: "Supernatural", title: "Supernatural"},
    {id: 39, type: "anime", name: "Detective", title: "Detective"},
    {id: 62, type: "anime", name: "Isekai", title: "Isekai"},
]
export const ANIME_STATUS_TYPES: animeStatusType[] = [
    {id: 1, title: "Airing"},
    {id: 2, title: "Complete"},
    {id: 3, title: "Upcoming"}
]
export const ANIME_YEARS: animeYearType[] = Array.from(
    {length: new Date().getFullYear()-1990},
    (_, i) => ({
        id: i+1,
        startValue: String(1991+i)+"-01-01",
        endValue: String(1991+i)+"-12-31",
        title: String(1991+i)
    })
);
export const ANIME_ORDERS: animeOrderByType[] = [
    {id: 1, title: "Title", value: "title"},
    {id: 2, title: "Start Date", value: "start_date"},
    {id: 3, title: "Episodes", value: "episodes"},
    {id: 4, title: "Rank", value: "score"},
]