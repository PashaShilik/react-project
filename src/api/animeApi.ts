import { IAnime } from "@/types/interfaces/IAnime";
import { API_FULL_URL, API_TOP_URL } from "@/constants/apiConstants/apiConstants";
import { _transformAnime } from "@/utils/transformAnime";

export const getAnimeList = async (
    page: number = 1,
    limit: number = 12
): Promise<IAnime[]> => {
    try {
        const response = await fetch(
            `${API_FULL_URL}?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
            throw new Error(
                `Couldn't fetch ${API_FULL_URL}, status: ${response.status}`
            );
        }
        const animeList = await response.json();
        return animeList.data.map(_transformAnime);
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const getTopAnime = async (
    limit: number = 10
): Promise<IAnime[]> => {
    try {
        const response = await fetch(
            `${API_TOP_URL}?limit=${limit}`
        );
        if (!response.ok) {
            throw new Error(
                `Couldn't fetch ${API_TOP_URL}, status: ${response.status}`
            );
        }
        const request = await response.json();
        return request.data.slice(0, 10).map(_transformAnime);
    } catch (e) {
        console.error(e);
        return [];
    }
}

// получение аниме по id для перехода на страницу для детального просмотра
export const getAnimeById = async (
    id: string | number
): Promise<IAnime | null> => {
    try {
        const response = await fetch(`${API_FULL_URL}/${id}`);
        if (!response.ok) {
            throw new Error(
                `Couldn't fetch ${API_FULL_URL}. Anime not found; status: ${response.status}`
            );
        }
        const data = await response.json();
        return _transformAnime(data.data);
    } catch (e) {
        console.error("Failed anime fetching", e);
        return null;
    }
};
