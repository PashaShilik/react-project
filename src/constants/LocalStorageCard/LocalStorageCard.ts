import { LOCAL_STORAGE_KEYS } from '@/constants/LocalStorageKeys/LocalStorageKeys';
import { Anime } from '@/types/interfaces/Anime';

export type User = {
    id: number;
    lastName: string;
    login: string;
    name: string;
    password: string;
    Favorites: Anime[]; 
};
export const getAuthMe = () => {
    const authMeItem = localStorage.getItem(LOCAL_STORAGE_KEYS.AuthMe);
    return authMeItem ? JSON.parse(authMeItem) : null;
};

export const getUsers = () => {
    const usersItem = localStorage.getItem(LOCAL_STORAGE_KEYS.Users);
    return usersItem ? JSON.parse(usersItem) : null;
};

export const updateFavoritesInLocalStorage = (updatedFavorites:any) => {
    const authMe = getAuthMe();
    localStorage.setItem(LOCAL_STORAGE_KEYS.AuthMe, JSON.stringify({ ...authMe, Favorites: updatedFavorites }));
};

export const updateUsersInLocalStorage = (getUsers:any, updatedUser:any) => {
    const userIndex = getUsers.findIndex((user:any) => user.login === updatedUser.login);
    if (userIndex !== -1) {
        const updatedUsers = [
            ...getUsers.slice(0, userIndex),
            updatedUser,
            ...getUsers.slice(userIndex + 1)
        ];
        localStorage.setItem(LOCAL_STORAGE_KEYS.Users, JSON.stringify(updatedUsers));
    }
};