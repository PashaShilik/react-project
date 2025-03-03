import React from 'react';
import styles from '@/pages/SearchPage/Blocks/SelectorsBlock/selectorsBlock.module.scss';
import {CommonSelector} from "@/components/Common/CommonSelector/CommonSelector";
import {useAppDispatch, useAppSelector} from "@/redux/store";
import {setGenre, setStatus, setYear} from "@/redux/reducers/searchReducer/searchSlice";
import {animeGenreType, animeStatusType, animeYearType} from "@/types/search";
import {ANIME_GENRES, ANIME_STATUS_TYPES, ANIME_YEARS} from "@/constants/searchConstants/searchConstants";

export const SelectorsBlock = () => {

    const dispatch = useAppDispatch();
    const {genre, status, year} = useAppSelector(state => state.searchReducer);

    const handleGenreChange = (item: animeGenreType) => {
        dispatch(setGenre(item));
    }

    const handleYearChange = (item: animeYearType) => {
        dispatch(setYear(item));
    }

    const handleStatusChange = (item: animeStatusType) => {
        dispatch(setStatus(item));
    }

    return (
        <div className={styles.selectorsBlock}>
            <CommonSelector
                activeItem={genre}
                setActiveItem={(item: animeGenreType) => handleGenreChange(item)}
                data={ANIME_GENRES}
                name={"Genre"}
                type={"default"}
            />
            <CommonSelector
                activeItem={status}
                setActiveItem={(item: animeStatusType) => handleStatusChange(item)}
                data={ANIME_STATUS_TYPES}
                name={"Status"}
                type={"default"}
            />
            <CommonSelector
                activeItem={year}
                setActiveItem={(item: animeYearType) => handleYearChange(item)}
                data={ANIME_YEARS}
                name={"Year"}
                type={"default"}
            />
        </div>
    );
};