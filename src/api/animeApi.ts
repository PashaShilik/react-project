import { Anime } from "@/types/interfaces/Anime";
import { MovieData } from "@/types/interfaces/MovieData";
import { CharacterResponse } from "@/types/interfaces/Character";
import {
    API_FULL_URL,
    API_TOP_URL,
    API_CHARACTERS_ENDPOINT,
} from "@/constants/apiConstants/apiConstants";
import { _transformAnime } from "@/utils/transformAnime/transformAnime";
import { _transformCharacter } from "@/utils/transformCharacter";
import { ParamsProps } from "@/types/search";
import { convertParamsToQueryString } from "@/utils/search/convertParamsToQueryString";
import { removeDuplicatesFromAnimeList } from "@/utils/search/removeDuplicatesFromAnimeList";
import { removePageAndLimitFromQueryString } from "@/utils/search/removePageAndLimitFromQueryString";

export const getAnimeList = async (
    page: number = 1,
    limit: number = 12
): Promise<Anime[]> => {
    try {
        const response = await fetch(
            `${API_FULL_URL}?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
            throw new Error(
                `Couldn't fetch ${API_FULL_URL}, status: ${response.status}`
            );
        }
        const request = await response.json();
        const animeList = request.data.map(_transformAnime);
        return removeDuplicatesFromAnimeList(animeList);
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const getTopAnime = async (limit: number = 10): Promise<Anime[]> => {
    try {
        const response = await fetch(`${API_TOP_URL}?limit=${limit}`);
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
};

// получение аниме по id для перехода на страницу для детального просмотра
export const getAnimeById = async (
    id: string | number
): Promise<MovieData | null> => {
    try {
        const response = await fetch(`${API_FULL_URL}/${id}/full`);
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

export const getAnimeByParams = async (
    props: ParamsProps
): Promise<{ data: Anime[]; pagination: any; searchString: string } | null> => {
    try {
        const propsString = convertParamsToQueryString(props);
        const response = await fetch(`${API_FULL_URL}?${propsString}`);

        if (!response.ok) {
            throw new Error(
                `Couldn't fetch ${API_FULL_URL}?${propsString}. Anime not found; status: ${response.status}`
            );
        }
        const { data, pagination } = await response.json();
        const animeList = data.map(_transformAnime);

        return {
            data: removeDuplicatesFromAnimeList(animeList),
            pagination: pagination,
            searchString: `?${removePageAndLimitFromQueryString(propsString)}`,
        };
    } catch (e) {
        console.error("Failed anime fetching", e);
        return null;
    }
};

export const getAnimeCharacters = async (
    id: string | number
): Promise<CharacterResponse[]> => {
    try {
        const response = await fetch(
            `${API_FULL_URL}/${id}/${API_CHARACTERS_ENDPOINT}`
        );
        if (!response.ok) {
            throw new Error(
                `Failed to fetch characters, status: ${response.status}`
            );
        }
        const data = await response.json();
        return data.data.map((item: CharacterResponse) => ({
            character: _transformCharacter(item.character),
        }));
    } catch (e) {
        console.error("Failed to fetch characters", e);
        return [];
    }
};
