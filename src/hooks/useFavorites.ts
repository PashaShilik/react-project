import { useEffect, useState } from 'react';
import { useAppDispatch } from "@/redux/store";
import { setFavorites } from "@/redux/reducers/userReducer/userReducer";
import { setMessageModal, setModalByName } from "@/redux/reducers/modalReducer/modalReducer";
import { getAuthMe, getUsers, updateFavoritesInLocalStorage, updateUsersInLocalStorage } from '@/constants/LocalStorageCard/LocalStorageCard';
import { User } from '@/constants/LocalStorageCard/LocalStorageCard'; 
import { Anime } from '@/types/interfaces/Anime';
import { UniversalData } from '@/types/interfaces/universalData';

const useFavorites = (data: UniversalData, isUserAuth: boolean, favorites: Anime[]) => {
    const dispatch = useAppDispatch();
    const [isFavorites, setIsFavorites] = useState<boolean>(false);

    const storedAuthMe = getAuthMe();
    const currentFavorites = storedAuthMe ? storedAuthMe.Favorites : [];

    useEffect(() => {
        const isSavedFavorite = currentFavorites.some((item:any) => item.id === data.id);
        if (isSavedFavorite) {
            setIsFavorites(true);
        }
    }, [currentFavorites, data.id]);

    const handleClickFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (isFavorites && isUserAuth) {
            handleDeleteFavorites();
        } else if (isUserAuth) {
            handleAddFavorites();
        } else {
            dispatch(setModalByName({ isModalActive: true, modalName: 'modal-GoToEntranceModal', withDarkOverlay: true }));

            dispatch(setMessageModal('To add anime to your favorites you need to register!'));
        }
    };

    const handleAddFavorites = () => {
        const newFavorites = [...currentFavorites, data];
        updateFavoritesInLocalStorage(newFavorites);
        const getUsersData = getUsers();
        const updatedUser: User = { ...storedAuthMe, Favorites: newFavorites };
        updateUsersInLocalStorage(getUsersData, updatedUser);
        dispatch(setFavorites({ Favorites: newFavorites }));
        setIsFavorites(true);
    };

    const handleDeleteFavorites = () => {
        const updatedFavorites = currentFavorites.filter((item:any) => item.id !== data.id);
        updateFavoritesInLocalStorage(updatedFavorites);
        const getUsersData = getUsers();
        const updatedUser: User = { ...storedAuthMe, Favorites: updatedFavorites };
        updateUsersInLocalStorage(getUsersData, updatedUser);
        dispatch(setFavorites({ Favorites: updatedFavorites }));
        setIsFavorites(false);
    };

    return { isFavorites, handleClickFavorites };
};

export default useFavorites;
