import React from 'react';
import styles from './searchBlock.module.scss'
import MainSearch from "../../../../components/MainSearch/MainSearch";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../routes/routes";

export const SearchBlock = function () {
    return (
        <div className={styles.searchBlock}>
            <MainSearch/>
            <p className={styles.searchBlock__text}>
                Can't find something specific?<br/>
                Use <Link to={ROUTES.search}>advanced search</Link>
            </p>
        </div>
    )
}

