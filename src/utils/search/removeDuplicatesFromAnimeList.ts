import {IAnime} from "@/types/interfaces/IAnime";
export function removeDuplicatesFromAnimeList(animeList: IAnime[]): IAnime[] {
    const usedIds = new Set();
    return animeList.filter((el: IAnime) => {
        if(!el.hasOwnProperty('id') || usedIds.has(el.id)) return false;
        usedIds.add(el.id);
        return true;
    });
}