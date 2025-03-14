import React, {FC} from 'react';
import styles from "./resultsBlock.module.scss";
import {CommonButton} from "@/components/Common/CommonButton/CommonButton";
import {FilterBlock} from "@/pages/SearchPage/Blocks/FilterBlock/FilterBlock";
import {CardList} from "@/pages/HomePage/Bloks/CardListBlock/Blocks/CardList/CardList";
import {Anime} from "@/types/interfaces/Anime";
import {CommonLoader} from "@/components/Common/CommonLoader/CommonLoader";

type Props = {
    animeList: Anime[]
    foundCount: number
    isLoading: boolean
    isLoadingPages: boolean
    onShowMoreFunc: () => void
}

export const ResultsBlock: FC<Props> = (props) => {

    const {animeList, foundCount, isLoading, isLoadingPages, onShowMoreFunc} = props;

    const foundedBlock = <>
        <div className={styles.foundBlock__header_list_container}>
            <h2 className={styles.foundBlock__title}>{foundCount} matches found</h2>
            <FilterBlock/>
        </div>
        <CardList animeList={animeList}/>
        {animeList.length < foundCount &&
            <div className={styles.foundBlock__button_container}>
                <CommonButton
                    text={isLoadingPages ? "Loading..." : "Show more"}
                    disabled={isLoadingPages}
                    type={"default_bg"}
                    onClick={onShowMoreFunc}
                />
            </div>
        }
    </>

    const searchResult = (isLoading ?
            <CommonLoader/>
            :
            (
                (animeList.length) ?
                    <>{foundedBlock}</>
                    :
                    <h2 className={styles.foundBlock_title}>
                        No results were found for your request
                    </h2>
            )
    )

    return (
        <div className={styles.foundBlock}>
            {searchResult}
        </div>
    );
};