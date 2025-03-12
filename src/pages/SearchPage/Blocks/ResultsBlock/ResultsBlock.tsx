import React, {FC} from 'react';
import styles from "./resultsBlock.module.scss";
import {CommonButton} from "@/components/Common/CommonButton/CommonButton";
import {FilterBlock} from "@/pages/SearchPage/Blocks/FilterBlock/FilterBlock";
import {CardList} from "@/pages/HomePage/Bloks/CardListBlock/Blocks/CardList/CardList";
import {Anime} from "@/types/interfaces/Anime";

type Props = {
    animeList: Anime[]
    foundCount: number
    isLoading: boolean
    onShowMoreFunc: () => void
}

export const ResultsBlock: FC<Props> = ({animeList, foundCount, isLoading, onShowMoreFunc}) => {

    const searchResult = (animeList.length ?
            (
                <>
                    <div className={styles.foundBlock__header_list_container}>
                        <h2 className={styles.foundBlock__title}>{foundCount} matches found</h2>
                        <FilterBlock />
                    </div>
                    <CardList animeList={animeList}/>
                </>
            )
            :
            isLoading && <h2 className={styles.foundBlock_title}>No results were found for your request</h2>
    )

    return (
        <div className={styles.foundBlock}>
            {searchResult}

            {animeList.length < foundCount &&
            <div className={styles.foundBlock__button_container}>
                <CommonButton
                    text={isLoading ? "Loading..." : "Show more"}
                    type={"default_bg"}
                    onClick={onShowMoreFunc}
                />
            </div>
            }
        </div>
    );
};