import { _transformAnime } from "@/utils/transformAnime/transformAnime";
import {
    ONGOING,
    UNKNOWN_YEAR,
    THUMBNAIL,
    CURRENTLY,
} from "@/constants/apiConstants/apiConstants";
import { Anime } from "@/types/interfaces/Anime";

describe("_transformAnime", () => {
    test("if full data available", () => {
        const testAnime = {
            mal_id: 5114,
            title: "Fullmetal Alchemist: Brotherhood",
            type: "anime",
            images: {
                webp: {
                    image_url:
                        "https://cdn.myanimelist.net/images/anime/1208/94745.webp",
                },
            },
            genres: [
                { name: "Action" },
                { name: "Adventure" },
                { name: "Drama" },
                { name: "Fantasy" },
            ],
            status: "Finished Airing",
            score: 9.1,
            aired: {
                prop: {
                    from: { year: 2009, month: 4 },
                    to: { year: 2010, month: 7 },
                },
            },
        };

        const result: Anime = _transformAnime(testAnime);

        expect(result).toEqual({
            id: 5114,
            title: "Fullmetal Alchemist: Brotherhood",
            type: "anime",
            imageUrl:
                "https://cdn.myanimelist.net/images/anime/1208/94745.webp",
            genres: "Action, Adventure, Drama, Fantasy",
            yearStart: "Apr, 2009",
            yearEnd: "July, 2010",
            score: 9.1,
        });
    });

    test("should use THUMBNAIL if !imageUrl", () => {
        const testAnime = {
            mal_id: 2313,
            title: "No image anime",
            type: "anime",
            images: {},
            genres: [{ name: "Action" }],
            status: "Finished Airing",
            score: 9.1,
            aired: {
                prop: {
                    from: { year: 2009, month: 4 },
                    to: { year: 2010, month: 7 },
                },
            },
        };

        const result = _transformAnime(testAnime);

        expect(result.imageUrl).toBe(THUMBNAIL);
    });

    test("should use ONGOING for yearEnd, if status === CURRENTLY", () => {
        const testAnime = {
            mal_id: 21,
            title: "One Piece",
            type: "TV",
            images: {
                webp: {
                    image_url:
                        "https://cdn.myanimelist.net/images/anime/1244/138851.webp",
                },
            },
            genres: [
                { name: "Action" },
                { name: "Adventure" },
                { name: "Fantasy" },
            ],
            status: CURRENTLY,
            score: 8.73,
            aired: {
                prop: {
                    from: { year: 1999, month: 10 },
                    to: null,
                },
            },
        };

        const result = _transformAnime(testAnime);

        expect(result.yearEnd).toBe(ONGOING);
    });

    test("should use UNKNOWN_YEAR for uncorrect", () => {
        const testAnime = {
            mal_id: 414,
            title: "Unknown date anime",
            type: "TV",
            images: {
                webp: {
                    image_url:
                        "https://cdn.myanimelist.net/images/anime/1244/138851.webp",
                },
            },
            genres: [{ name: "Action" }],
            status: "Finished Airing",
            score: 8.0,
            aired: {
                prop: {
                    from: { year: null, month: null },
                    to: { year: null, month: null },
                },
            },
        };

        const result = _transformAnime(testAnime);

        expect(result.yearStart).toBe(UNKNOWN_YEAR);
        expect(result.yearEnd).toBe("Unknown");
    });

    test("should use Classic, if genres.length === 0", () => {
        const testAnime = {
            mal_id: 515,
            title: "No genres anime",
            type: "TV",
            images: {
                webp: {
                    image_url:
                        "https://cdn.myanimelist.net/images/anime/1244/138851.webp",
                },
            },
            genres: [],
            status: "Finished Airing",
            score: 8.0,
            aired: {
                prop: {
                    from: { year: 2009, month: 4 },
                    to: { year: 2010, month: 7 },
                },
            },
        };

        const result = _transformAnime(testAnime);

        expect(result.genres).toBe("Classic");
    });
});
