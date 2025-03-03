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
    },
});

export const { setIsAuth, setAuthInfo } = authReducer.actions;
export default authReducer.reducer;
