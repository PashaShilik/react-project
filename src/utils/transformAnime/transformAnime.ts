import { THUMBNAIL, ONGOING, UNKNOWN_YEAR, DEFAULT_DESCRIPTION, MONTHS, CURRENTLY } from "@/constants/apiConstants/apiConstants";

export const _transformAnime = (anime: any) => {
    const formatDate = (year: number | string, month: number | string) => {
        if (year === null || !month) return UNKNOWN_YEAR;
        return `${MONTHS[parseInt(month as string) - 1]}, ${year}`;
    };

    const status = anime.status;
    let yearEnd = anime.aired?.prop?.to?.year || ONGOING;

    if (status === CURRENTLY) {
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
        imageUrl: anime.images?.webp?.image_url
            ? anime.images?.webp?.image_url
            : THUMBNAIL,
        genres: anime.genres && anime.genres.length
            ? anime.genres.map((genre: any) => genre.name).join(", ")
            : "Classic",
        yearStart: formatDate(
            anime.aired?.prop?.from?.year,
            anime.aired?.prop?.from?.month
        ),
        yearEnd: yearEnd,
        score: anime.score,
        trailer: {
          embed_url: anime.trailer?.embed_url || '',
          images: {
              small_image_url: anime.trailer?.images?.small_image_url || '',
          }
        },
        synopsis: anime.synopsis || DEFAULT_DESCRIPTION,
        rating: anime.rating || '',
        rank: anime.rank || 0,
        scored_by: anime.scored_by || 0,
        popularity: anime.popularity || 0,
        members: anime.members || 0,
        favorites: anime.favorites || 0,
        episodes: anime.episodes || 0,
        source: anime.source || '',
        season: anime.season || '',
        duration: anime.duration || '',
    };
};