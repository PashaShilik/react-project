import { THUMBNAIL, ONGOING, UNKNOWN_YEAR, DEFAULT_DESCRIPTION, MONTHS } from "@/constants/apiConstants/apiConstants";
import {IAnime} from "@/types/interfaces/IAnime";

// деструктуризация полученных данных для удобной работы
export const _transformAnime = (anime: any): IAnime => {
    const formatDate = (year: number | string, month: number | string) => {
        if (year === null || !month) return UNKNOWN_YEAR;
        return `${MONTHS[parseInt(month as string) - 1]}, ${year}`;
    };

    const yearStart = anime.aired?.prop?.from?.year;
    let yearEnd = anime.aired?.prop?.to?.year || ONGOING;

    if (yearStart > 2020) {
        yearEnd = ONGOING;
    } else {
        yearEnd = formatDate(
            anime.aired?.prop?.to?.year,
            anime.aired?.prop?.to?.month
        )
    }

    return {
        id: anime.mal_id,
        title: anime.title,
        type: anime.type,
        description: anime.synopsis
            ? anime.synopsis
            : DEFAULT_DESCRIPTION,
        imageUrl: anime.images?.webp?.image_url
            ? anime.images?.webp?.image_url
            : THUMBNAIL,
        genres: anime.genres
            ? anime.genres.map((genre: any) => genre.name).join(", ")
            : "Classic",
        yearStart: formatDate(
            yearStart,
            anime.aired?.prop?.from?.month
        ),
        yearEnd: yearEnd,
        score: anime.score,
    };
};