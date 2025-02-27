import { IAnime } from "@/types/interfaces/IAnime";
import { API_BASE_URL } from "@/constants/apiConstants/apiConstants";
import { _transformAnime } from "@/utils/transformAnime";

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

