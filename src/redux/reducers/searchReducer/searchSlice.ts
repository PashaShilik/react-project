import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {animeGenreType, animeOrderByType, animeStatusType, animeYearType, SortOrder} from "@/types/search";
import {ANIME_GENRES, ANIME_ORDERS, ANIME_STATUS_TYPES, ANIME_YEARS} from "@/constants/searchConstants/searchConstants";

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
            if(queryParams.has("q")) state.q = queryParams.get('q') ?? "";
            if(queryParams.has("genres"))
                state.genre = ANIME_GENRES.find(el => el.id === Number(queryParams.get("genres"))) ?? null;
            if(queryParams.has("status"))
                state.status = ANIME_STATUS_TYPES.find(el => el.title === queryParams.get("status")) ?? null;
            if(queryParams.has("start_date"))
                state.year = ANIME_YEARS.find(el => queryParams.get("start_date")?.startsWith(el.title)) ?? null;
            if(queryParams.has("order_by"))
                state.order_by = ANIME_ORDERS.find(el => el.value === queryParams.get('order_by')) ?? null;
            if(queryParams.has("sort")) {
                const sortStr = queryParams.get("sort");
                state.sort = (sortStr === SortOrder.DOWN) ? SortOrder.DOWN : SortOrder.UP;
            }
            state.isFetched = true;
        },
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
} = searchSlice.actions;