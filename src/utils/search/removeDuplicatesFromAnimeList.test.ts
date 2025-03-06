import {removeDuplicatesFromAnimeList} from './removeDuplicatesFromAnimeList'
import {Anime} from "@/types/interfaces/Anime";

test('should remove duplicates with same id', () => {
    const params = [generateAnime(1), generateAnime(1)];
    const expected = [generateAnime(1)];
    expect(removeDuplicatesFromAnimeList(params)).toEqual(expected);
});

test('should handle empty array', () => {
    const params: any[] = [];
    const expected: any[] = [];
    expect(removeDuplicatesFromAnimeList(params)).toEqual(expected);
});

test('should filter elements without id', () => {
    const params: any[] = [{foo: 'info'}, generateAnime(1), {title: "Naruto"}];
    const expected: any[] = [generateAnime(1)];
    expect(removeDuplicatesFromAnimeList(params)).toEqual(expected);
})

function generateAnime(id: number): Anime {
    return {
        id: id,
        title: "Naruto",
        imageUrl: "https:/cdn.myanimelist.net/images/anime/4/19644.jpg",
        type: "Anime",
        genres: ["1", "5"],
        yearStart: 2008,
        yearEnd: 2014,
        score: 10
    }
}