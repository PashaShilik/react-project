import React, {FC} from 'react';
import styles from "./searchList.module.scss";
import SearchListItem from "@/components/MainSearch/SearchList/SearchListItem/SearchListItem";
import {Anime} from "@/types/interfaces/Anime";
import {CommonButton} from "@/components/Common/CommonButton/CommonButton";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/routes/routes";

type Props = {
    searchValue: string
    suggestions: Anime[]
    onItemClick: (id: number) => void
}
const SearchList: FC<Props> = ({searchValue, suggestions, onItemClick}) => {
    const navigate = useNavigate();

    const handleShowMoreButton = () => {
        navigate(`${ROUTES.search}?q=${searchValue}`);
    }

    return (
        <ul className={styles.searchList}>
            {suggestions.length > 0 ?
                <>
                    {suggestions.map(anime =>
                        <SearchListItem
                            key={anime.id}
                            anime={anime}
                            onClickFn={() => onItemClick(anime.id)}
                        />
                    )}
                    {suggestions.length > 4 &&
                        <CommonButton
                            style={{width: "50%", margin: "10px auto 0"}}
                            text={"Show more"}
                            type={"default_bg"}
                            onClick={handleShowMoreButton}
                        />
                    }
                </>

                :
                <p className={styles.searchList__title}>No results were found for your request</p>
            }
        </ul>
    );
};

export default SearchList;