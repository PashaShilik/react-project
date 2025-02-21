import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    
   
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunkType = ThunkDispatch<RootStateType, void, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkType>();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;