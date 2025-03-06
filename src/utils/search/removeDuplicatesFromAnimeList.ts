import {Anime} from "@/types/interfaces/Anime";
export function removeDuplicatesFromAnimeList(animeList: Anime[]): Anime[] {
    const usedIds = new Set();
    return animeList.filter((el: Anime) => {
        if(!el.hasOwnProperty('id') || usedIds.has(el.id)) return false;
        usedIds.add(el.id);
        return true;
    });
}