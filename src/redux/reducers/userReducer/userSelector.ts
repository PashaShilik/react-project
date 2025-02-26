import { RootState } from '../../store';

export const isAuthSelector = (state: RootState) => {
    return state.authReducer.isAuth;
};

export const authInfoSelector = (state: RootState) => {
    return state.authReducer.authInfo;
};