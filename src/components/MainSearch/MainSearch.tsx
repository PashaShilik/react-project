import React, {FC, useRef, useState} from 'react';
import styles from "./mainSearch.module.scss";
import {CommonSearch} from "../Common/CommonSearch/CommonSearch";
import searchIco from "@/assets/svg/search.png";
import {ROUTES} from "@/routes/routes";
import useDebounce from "../../hooks/useDebounce";
import {useNavigate} from "react-router-dom";
import {useClickOutsideAndClose} from "@/hooks/useClickOutsideAndClose";
import {API_BASE_URL} from "@/constants/apiConstants/apiConstants";
import {_transformAnime} from "@/utils/transformAnime/transformAnime";
import {Anime} from "@/types/interfaces/Anime";
import SearchListItem from "@/components/MainSearch/SearchListItem/SearchListItem";

type Props = {
    limit?: number
}
export const MainSearch: FC<Props> = ({limit = 5}) => {

    const blockRef = useRef<HTMLDivElement>(null);
    const debouncedSearch = useDebounce(search, 1000);
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<Anime[]>([]);
    const [suggestionsVisible, setSuggestionsVisible] = useState(false);

    useClickOutsideAndClose(blockRef, () => setSuggestionsVisible(false));

    const handleChange = (newValue: string) => {
        setValue(newValue);
        setSuggestionsVisible(false);
        setIsLoading(!!newValue); // Чтобы отменить загрузку, если значение пустое
        debouncedSearch(newValue);
    };
    const handleFocus = () => {
        if (value) {
            setSuggestionsVisible(true);
        }
    };

    const handleListItemClick = (id: number) => {
        navigate(`${ROUTES.viewCard}/${id}`);
    }

    function search(newValue: string) {
        if(!newValue) return;

        fetch(`${API_BASE_URL}?${newValue ? `q=${newValue}` : ''}&limit=${limit}`)
            .then(response => response.json())
            .then(json => {
                setSuggestions(Array.isArray(json.data) ? json.data.map(_transformAnime) : []);
                setSuggestionsVisible(true);
                setIsLoading(false);
            });
    }
    return (
        <div className={styles.search} ref={blockRef}>
            <CommonSearch
                value={value}
                onChangeFn={handleChange}
                onFocusFn={handleFocus}
                image={searchIco}
                isLoading={isLoading}
            />
            {suggestionsVisible &&

                <ul className={styles.search__suggestions}>
                    { suggestions.length > 0 ?
                        suggestions.map(anime =>
                            <SearchListItem
                                anime={anime}
                                onClickFn={() => handleListItemClick(anime.id)}
                            />
                        )
                        :
                        <p className={styles.search__suggestions_title}>No results were found for your request</p>
                    }
                </ul>

            }
        </div>
    );
};