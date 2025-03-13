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

export const updateAuthMeHistory = (searchHistoryEntry: any) => {
    const authMe = getAuthMe();
    if (authMe) {
        const updatedAuthMe = {
            ...authMe,
            History: [...(authMe.History || []), searchHistoryEntry],
        };
        localStorage.setItem(LOCAL_STORAGE_KEYS.AuthMe, JSON.stringify(updatedAuthMe));
        return updatedAuthMe;
    }
    return null;
};

export const updateUsersHistory = (updatedAuthMe: any) => {
    if (updatedAuthMe) {
        const users = getUsers();
        if (users) {
            const userIndex = users.findIndex((user: any) => user.login === updatedAuthMe.login);
            if (userIndex !== -1) {
                const updatedUsers = [...users];
                updatedUsers[userIndex] = { ...updatedUsers[userIndex], History: updatedAuthMe.History };
                localStorage.setItem(LOCAL_STORAGE_KEYS.Users, JSON.stringify(updatedUsers));
            }
        }
    }
};

export const deleteHistoryEntry = (index: number) => {
    const authMe = getAuthMe();
    if (authMe && authMe.History) {
        const updatedHistory = authMe.History.filter((_: any, i: number) => i !== index);
        const updatedAuthMe = { ...authMe, History: updatedHistory };
        localStorage.setItem(LOCAL_STORAGE_KEYS.AuthMe, JSON.stringify(updatedAuthMe));
        updateUsersHistory(updatedAuthMe);
    }
};

export const updateSearchHistoryInLocalStorage = (searchHistoryEntry: any) => {
    const updatedAuthMe = updateAuthMeHistory(searchHistoryEntry);
    updateUsersHistory(updatedAuthMe);
};