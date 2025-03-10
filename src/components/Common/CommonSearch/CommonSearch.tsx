import React, {FC, useRef, useState} from 'react';
import styles from './commonSearch.module.scss';
import defaultImage from '../../../assets/svg/Search.svg'
import deleteIco from "../../../assets/svg/Delete.svg";
import loader from '../../../assets/img/loader.webp';

type Props = {
    value: string;
    onChangeFn?: (value: string) => void;
    onFocusFn?: () => void;
    image?: string;
    placeholder?: string;
    maxLength?: number;
    isLoading?: boolean
}

export const CommonSearch: FC<Props> = (props) => {

    const {value, onChangeFn, onFocusFn, image, placeholder, maxLength = 30, isLoading = false} = props;
    const [focus, setFocus] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (onChangeFn) {
            onChangeFn(newValue);
        }
    }
    const handleDeleteClick = () => {
        if (onChangeFn) {
            onChangeFn('');
        }
    }
    const handleFocus = () => {
        setFocus(true);
        if (onFocusFn) {
            onFocusFn();
        }
    }

    const handleBlur = () => {
        setFocus(false);
    }
    const handleWrapperClick = () => {
        if (ref) {
            ref.current?.focus();
        }
    }

    const loaderOrImage = (isLoading ?
        <img className={styles.search__loader} src={loader} alt={'loader'}/>
        :
        <img className={styles.search__img} src={image || defaultImage} alt={'search'}/>
    )

    return (
        <div className={`${styles.wrapper} ${focus ? styles.wrapper_focus : ''}`} onClick={handleWrapperClick}>
            <div className={styles.search}>
                {loaderOrImage}
                <input
                    className={styles.search__input}
                    placeholder={placeholder || 'Search...'}
                    value={value}
                    maxLength={maxLength}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={ref}
                />
                {value &&
                    <img
                        alt="ico"
                        src={deleteIco}
                        className={[styles.search__img, styles.search__img_delete].join(' ')}
                        onClick={handleDeleteClick}
                    />
                }
            </div>
        </div>
    );
};