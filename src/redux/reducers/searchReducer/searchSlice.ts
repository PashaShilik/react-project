import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {animeGenreType, animeOrderByType, animeStatusType, animeYearType, SortOrder} from "@/types/search";
import {
    ANIME_GENRES,
    ANIME_ORDERS,
    ANIME_STATUS_TYPES,
    ANIME_YEARS
} from "@/constants/searchConstants/searchConstants";
import {QueryParams} from "@/constants/searchConstants/QueryParams";

type initialStateType = {
    isFetched: boolean,
    q: string
    genre: animeGenreType | null
    status: animeStatusType | null
    year: animeYearType | null
    order_by: animeOrderByType | null
    sort: SortOrder
}

const initialState: initialStateType = {
    isFetched: false,
    q: "",
    genre: null,
    status: null,
    year: null,
    order_by: null,
    sort: SortOrder.UP
}

export const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setQ: (state, action: PayloadAction<string>) => {
            state.q = action.payload;
        },
        setGenre: (state, action: PayloadAction<animeGenreType | null>) => {
            state.genre = action.payload;
        },
        setStatus: (state, action: PayloadAction<animeStatusType | null>) => {
            state.status = action.payload;
        },
        setYear: (state, action: PayloadAction<animeYearType | null>) => {
            state.year = action.payload;
        },
        setOrderBy: (state, action: PayloadAction<animeOrderByType>) => {
            state.order_by = action.payload;
            state.sort = SortOrder.UP;
        },
        setSortDirection: (state, action: PayloadAction<SortOrder>) => {
            state.sort = action.payload;
        },
        setInfoFromQuery: (state, action: PayloadAction<string>) => {
            state.isFetched = false;
            const queryParams = new URLSearchParams(action.payload);
            if(queryParams.has(QueryParams.Name)) state.q = queryParams.get(QueryParams.Name) ?? "";

            state.genre = (queryParams.has(QueryParams.Genres)) ?
                ANIME_GENRES.find(el => el.id === Number(queryParams.get(QueryParams.Genres))) ?? null
                : null;
            state.status = (queryParams.has(QueryParams.Status)) ?
                ANIME_STATUS_TYPES.find(el => el.title === queryParams.get(QueryParams.Status)) ?? null
                : null;
            state.year = (queryParams.has(QueryParams.StartDate)) ?
                ANIME_YEARS.find(el => queryParams.get(QueryParams.StartDate)?.startsWith(el.title)) ?? null
                : null
            state.order_by = (queryParams.has(QueryParams.OrderBy)) ?
                ANIME_ORDERS.find(el => el.value === queryParams.get(QueryParams.OrderBy)) ?? null
                : null
            state.sort = (!queryParams.has(QueryParams.Sort) || queryParams.get(QueryParams.Sort) === SortOrder.DOWN) ? SortOrder.UP : SortOrder.DOWN;

            state.isFetched = true;
        },
        clearSearchInfo: (state) => {
            state.isFetched = false;
            state.q = "";
            state.genre = null;
            state.status = null;
            state.year = null;
            state.order_by = null;
            state.sort = SortOrder.UP;
        }
    }
})

export default searchSlice.reducer;

export const {
    setQ,
    setGenre,
    setYear,
    setStatus,
    setOrderBy,
    setSortDirection,
    setInfoFromQuery,
    clearSearchInfo,
} = searchSlice.actions;