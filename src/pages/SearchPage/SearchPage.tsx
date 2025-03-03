import React, {useEffect, useState} from 'react';
import styles from './searchPage.module.scss'
import {CommonSearch} from "@/components/Common/CommonSearch/CommonSearch";
import {CommonButton} from "@/components/Common/CommonButton/CommonButton";
import {CardList} from "@/pages/HomePage/Bloks/CardListBlock/Blocks/CardList/CardList";
import {IAnime} from "@/types/interfaces/IAnime";
import {getAnimeByParams} from "@/api/animeApi";
import {SelectorsBlock} from "@/pages/SearchPage/Blocks/SelectorsBlock/SelectorsBlock";
import {useAppSelector} from "@/redux/store";
import {FilterBlock} from "@/pages/SearchPage/Blocks/FilterBlock/FilterBlock";
import {useLocation, useNavigate} from "react-router-dom";
export const SearchPage = () => {

    const [searchValue, setSearchValue] = useState('');
    const [animeList, setAnimeList] = useState<IAnime[]>([]);
    const [foundCount, setFoundCount] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {genre, status, year, order_by, sort} = useAppSelector(state => state.searchReducer);

    useEffect(() => {
        handleSearch()
    }, [genre, status, year, order_by, sort]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "Enter") {
            handleSearch();
        }
    }

    const handleSearchChange = (newValue: string) => {
        setSearchValue(newValue);
    }
    const handleSearch = () => {
        if(isLoading) return;

        setIsLoading(true);

        search(1).then((res) => {
            if(res === null) return;
            const {data, pagination, searchString} = res;
            setFoundCount(pagination.items.total);
            setAnimeList(data);
            navigate(searchString);
        }).finally(() => {
            setIsLoading(false);
            setPage(1);
        });
    }

    const handleShowMore = () => {
        if(isLoading) return;

        setIsLoading(true);

        search(page+1).then((res) => {
            if(res === null) return;
            const {data} = res;
            setAnimeList(prevState => [...prevState, ...data]);
            setPage(prevState => prevState + 1);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    const search = async (page: number) => {
        return getAnimeByParams({
            page: page,
            limit: 9,
            q: searchValue,
            status: status?.title,
            genres: genre?.id,
            start_date: year?.startValue,
            end_date: year?.endValue,
            order_by: order_by?.value,
            sort: (order_by) ? sort : undefined,
        })
    }

    const searchResult = (animeList.length ?
        (
            <>
                <h2 className={styles.searchPage__foundBlock_title}>{foundCount} matches found</h2>
                <FilterBlock />
                <CardList animeList={animeList}/>
            </>
        )
        :
            <h2 className={styles.searchPage__foundBlock_title}>No results were found for your request</h2>
    )

    return (
        <div className={styles.searchPage} onKeyDown={handleKeyDown}>
            <h1 className={styles.searchPage__title}>Advanced Search</h1>
            <CommonSearch
                value={searchValue}
                onChangeFn={handleSearchChange}
            />

            {<SelectorsBlock/>}

            <CommonButton
                style={{width: 400}}
                text={isLoading?"Loading...":"Search"}
                type={"default_bg"}
                onClick={handleSearch}
            />
            <div className={styles.searchPage__foundBlock}>
                {searchResult}

                {animeList.length < foundCount &&
                    <CommonButton
                        style={{width: 400, alignSelf: "center"}}
                        text={isLoading?"Loading...":"Show more"}
                        type={"default_bg"}
                        onClick={handleShowMore}
                    />
                }
            </div>
        </div>
    )
}
