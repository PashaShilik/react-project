import React, {useEffect, useState} from 'react';
import styles from './searchPage.module.scss'
import {CommonSearch} from "@/components/Common/CommonSearch/CommonSearch";
import {CommonButton} from "@/components/Common/CommonButton/CommonButton";
import {Anime} from "@/types/interfaces/Anime";
import {getAnimeByParams} from "@/api/animeApi";
import {SelectorsBlock} from "@/pages/SearchPage/Blocks/SelectorsBlock/SelectorsBlock";
import {useAppDispatch} from "@/redux/store";
import {useLocation, useNavigate} from "react-router-dom";
import {setInfoFromQuery, setQ} from "@/redux/reducers/searchReducer/searchSlice";
import {Key} from "@/constants/Key";
import {searchSelector} from "@/redux/reducers/searchReducer/searchSelector";
import {useSelector} from "react-redux";
import {ResultsBlock} from "@/pages/SearchPage/Blocks/ResultsBlock/ResultsBlock";
export const SearchPage = () => {

    const dispatch = useAppDispatch();
    const {q, genre, status, year, order_by, sort, isFetched} = useSelector(searchSelector);
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [foundCount, setFoundCount] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('work')
        dispatch(setInfoFromQuery(location.search));
    }, []);

    useEffect(() => {
        if(isFetched === true) {
            handleSearch();
        }
    }, [genre, status, year, order_by, sort]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === Key.ENTER) {
            handleSearch();
        }
    }

    const handleSearchChange = (newValue: string) => {
        dispatch(setQ(newValue));
    }
    function handleSearch() {
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

    const search = async (page: number) =>
        getAnimeByParams({
            page: page,
            limit: 12,
            q: q,
            status: status?.title,
            genres: genre?.id,
            start_date: year?.startValue,
            end_date: year?.endValue,
            order_by: order_by?.value,
            sort: (order_by) ? sort : undefined,
        })

    return (
        <div className={styles.searchPage} onKeyDown={handleKeyDown}>
            <h1 className={styles.searchPage__title}>Advanced Search</h1>
            <CommonSearch
                value={q}
                onChangeFn={handleSearchChange}
            />

            {<SelectorsBlock/>}

            <CommonButton
                style={{width: 400}}
                text={isLoading?"Loading...":"Search"}
                type={"default_bg"}
                onClick={handleSearch}
            />

            <ResultsBlock
                animeList={animeList}
                isLoading={isLoading && !isFetched}
                foundCount={foundCount}
                onShowMoreFunc={() => handleShowMore()}
            />

        </div>
    )
}
