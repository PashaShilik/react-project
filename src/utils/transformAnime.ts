import { THUMBNAIL, ONGOING, UNKNOWN_YEAR, DEFAULT_DESCRIPTION, MONTHS } from "../constants/apiConstants/apiConstants";

// деструктуризация полученных данных для удобной работы
export const _transformAnime = (anime: any) => {
    const formatDate = (year: number | string, month: number | string) => {
        if (year === UNKNOWN_YEAR || !month) return UNKNOWN_YEAR;
        return `${MONTHS[parseInt(month as string) - 1]} ${year}`;
    };

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
            anime.aired?.prop?.from?.year || UNKNOWN_YEAR,
            anime.aired?.prop?.from?.month
        ),
        yearEnd: formatDate(
            anime.aired?.prop?.to?.year || ONGOING,
            anime.aired?.prop?.to?.month
        ),
        homepage: anime.url,
    };
};