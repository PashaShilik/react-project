import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {animeGenreType, animeOrderByType, animeStatusType, animeYearType, SortOrder} from "@/types/search.d";

type initialStateType = {
    genre: animeGenreType | null
    status: animeStatusType | null
    year: animeYearType | null
    order_by: animeOrderByType | null
    sort: SortOrder
}

const initialState: initialStateType = {
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
        }
    }
})

export default searchSlice.reducer;

export const {
    setGenre,
    setYear,
    setStatus,
    setOrderBy,
    setSortDirection
} = searchSlice.actions;