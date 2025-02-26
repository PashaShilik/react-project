import React, {FC} from 'react';
import styles from "./searchListItem.module.scss";
import {IAnime} from "../../../types/interfaces/IAnime";

type Props = {
    anime: IAnime,
    onClickFn?: () => void
}

const SearchListItem: FC<Props> = ({anime, onClickFn}) => {
    return (
        <li
            key={anime.id}
            className={styles.searchListItem}
            onClick={onClickFn}
        >
            <img
                src={anime.imageUrl}
                alt={anime.title}
            />
            <div className={styles.searchListItem_textContainer}>
                <h3
                    className={styles.searchListItem_textContainer_title}
                >
                    {anime.title}
                </h3>
                <p
                    className={styles.searchListItem_textContainer_type}
                >
                    {anime.type}
                </p>
            </div>
        </li>
    );
};

export default SearchListItem;