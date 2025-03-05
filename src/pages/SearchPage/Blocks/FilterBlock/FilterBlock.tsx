import React from 'react';
import styles from './filterBlock.module.scss';
import {CommonSelector} from "@/components/Common/CommonSelector/CommonSelector";
import {useAppDispatch} from "@/redux/store";
import {animeOrderByType, SortOrder} from "@/types/search";
import {setOrderBy, setSortDirection} from "@/redux/reducers/searchReducer/searchSlice";
import {ANIME_ORDERS} from "@/constants/searchConstants/searchConstants";
import {searchSelector} from "@/redux/reducers/searchReducer/searchSelector";
import {useSelector} from "react-redux";

export const FilterBlock = () => {
    const dispatch = useAppDispatch();
    const {order_by, sort} = useSelector(searchSelector);

    const handleChangeOrder = (item: animeOrderByType) => {
        dispatch(setOrderBy(item));
    }

    const handleArrowClick = () => {
        dispatch(setSortDirection(sort === SortOrder.UP ? SortOrder.DOWN : SortOrder.UP));
    }

    const showSortArrow = (
        order_by
            ?
            <span
                className={sort === SortOrder.UP ? styles.filterBlock__arrow_top : styles.filterBlock__arrow_bottom}
                onClick={handleArrowClick}
            >
                {"▲"}
            </span>
            :
                null
    )

    return (
        <div className={styles.filterBlock}>
            <CommonSelector
                activeItem={order_by}
                setActiveItem={handleChangeOrder}
                data={ANIME_ORDERS}
                name={"Order by"}
                type={"default"}
            />
            {showSortArrow}
        </div>
    );
};