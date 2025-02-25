import React, {FC, useRef, useState} from 'react';
import styles from "./mainSearch.module.scss";
import CommonSearch from "../Common/CommonSearch/CommonSearch";
import searchIco from "../../assets/svg/search.png";
import {ROUTES} from "../../routes/routes";
import useDebounce from "../../hooks/useDebounce";
import {useNavigate} from "react-router-dom";
import {useClickOutsideAndClose} from "../../hooks/useClickOutsideAndClose";

interface IAnime { //Временное решение
    mal_id: number
    title: string
    images: Record<string, Record<string, string>>
    genres: string[]
    type: string
}

type Props = {
    limit?: number
}
const MainSearch: FC<Props> = ({limit = 5}) => {
    const blockRef = useRef<HTMLDivElement>(null);
    const debouncedSearch = useDebounce(search, 1000);
    const navigate = useNavigate();


    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState<IAnime[]>([]);
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

    function search(newValue: string) {
        if(!newValue) return;

        fetch(`https://api.jikan.moe/v4/anime?${newValue ? `q=${newValue}` : ''}&limit=${limit}`)
            .then(response => response.json())
            .then(json => {
                setSuggestions(Array.isArray(json.data) ? json.data : []);
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
                            <li
                                key={anime.mal_id}
                                className={styles.search__suggestions_item}
                                onClick={() => navigate(`${ROUTES.viewCard}/${anime.mal_id}`)}
                            >
                                <img
                                    src={anime.images.webp.small_image_url}
                                    alt={anime.title}
                                />
                                <div className={styles.search__suggestions_item_textContainer}>
                                    <h3
                                        className={styles.search__suggestions_item_textContainer_title}
                                    >
                                        {anime.title}
                                    </h3>
                                    <p
                                        className={styles.search__suggestions_item_textContainer_type}
                                    >
                                        {anime.type}
                                    </p>
                                </div>
                            </li>
                        )
                        :
                        <p className={styles.search__suggestions_title}>По вашему запросу ничего не найдено</p>
                    }
                </ul>

            }
        </div>
    );
};

export default MainSearch;