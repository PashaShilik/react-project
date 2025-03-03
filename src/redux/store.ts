import { combineReducers } from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import modalReducer from './reducers/modalReducer/modalReducer';
import searchSlice from "@/redux/reducers/searchReducer/searchSlice";

const rootReducer = combineReducers({
    modalReducer: modalReducer,
    searchReducer: searchSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunkType = ThunkDispatch<RootStateType, void, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
