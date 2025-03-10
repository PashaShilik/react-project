import { Anime } from '@/types/interfaces/Anime';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        
        authInfo: {},
        isAuth: false
    } as any,
    reducers: {
        setAuthInfo: (state, action) => {
            state.authInfo = action.payload;
        },
        setIsAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
            state.isAuth = action.payload.isAuth;
        },
        setFavorites: (state, action: PayloadAction<{ Favorites: Anime[]}>) => {
            state.authInfo.Favorites = action.payload.Favorites;
        },
    },
});

export const { setIsAuth, setAuthInfo, setFavorites } = authReducer.actions;
export default authReducer.reducer;
