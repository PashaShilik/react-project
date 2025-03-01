import { THUMBNAIL, ONGOING, UNKNOWN_YEAR, DEFAULT_DESCRIPTION, MONTHS } from "@/constants/apiConstants/apiConstants";

// деструктуризация полученных данных для удобной работы
export const _transformAnime = (anime: any) => {
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
        homepage: anime.url,
        score: anime.score,
        images: {
          webp: {
            large_image_url: anime.images?.webp?.large_image_url || '',
            small_image_url: anime.images?.webp?.small_image_url || '',
            image_url: anime.images?.webp?.image_url || '',
          },
        },
        trailer: {
          embed_url: anime.trailer?.embed_url || '',
          images: {
              small_image_url: anime.trailer?.images?.small_image_url || '',
          }
        },
        synopsis: anime.synopsis || DEFAULT_DESCRIPTION,
        year: anime.aired?.prop?.from?.year || 0,
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