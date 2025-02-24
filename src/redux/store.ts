import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import {AnyAction, configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import modalReducer from './reducers/modalReducer/modalReducer';

const rootReducer = combineReducers({
    modalReducer: modalReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunkType = ThunkDispatch<RootStateType, void, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkType>();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
