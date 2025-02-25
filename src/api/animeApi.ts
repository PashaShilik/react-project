import { IAnime } from "../types/interfaces/IAnime";

const API_BASE_URL = "https://api.jikan.moe/v4/anime";
export const getAnimeList = async (
    page: number = 1,
    limit: number = 9
): Promise<IAnime[]> => {
    try {
        const response = await fetch(
            `${API_BASE_URL}?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
            throw new Error(
                `Couldn't fetch ${API_BASE_URL}, status: ${response.status}`
            );
        }
        const request = await response.json();
        return request.data.map(_transformAnime);
    } catch (e) {
        console.error(e);
        return [];
    }
};

// получение аниме по id для перехода на страницу для детального просмотра
export const getAnimeById = async (
    id: string | number
): Promise<IAnime | null> => {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
            throw new Error(
                `Couldn't fetch ${API_BASE_URL}. Anime not found; status: ${response.status}`
            );
        }
        const request = await response.json();
        return _transformAnime(request.data);
    } catch (e) {
        console.error("Failed anime fetching", e);
        return null;
    }
};

// деструктуризация полученных данных для удобной работы
const _transformAnime = (anime: any) => {
    const formatDate = (year: number | string, month: number | string) => {
        if (year === "Unknown" || !month) return "Unknown";
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        return `${months[parseInt(month as string) - 1]} ${year}`;
    };

    return {
        id: anime.mal_id,
        title: anime.title,
        description: anime.synopsis
            ? anime.synopsis
            : "Wops, description is not found now !",
        imageUrl: anime.images?.webp?.image_url
            ? anime.images?.webp?.image_url
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBNnH7hPrYmvHPtcImonVIDwGgMIgtg5URew&s",
        genres: anime.genres
            ? anime.genres.map((genre: any) => genre.name).join(", ")
            : "Classic",
        yearStart: formatDate(
            anime.aired?.prop?.from?.year || "Unknown",
            anime.aired?.prop?.from?.month
        ),
        yearEnd: formatDate(
            anime.aired?.prop?.to?.year || "Ongoing",
            anime.aired?.prop?.to?.month
        ),
        homepage: anime.url,
    };
};
