import { useRef, useState } from 'react';
import styles from './commonSelector.module.scss';
import arrowDown from '../../../assets/img/arrow-down.png';
import arrowUp from '../../../assets/img/arrow-up.png';
import closeIcon from '../../../assets/svg/Delete.svg';
import { useClickOutsideAndClose } from '../../../hooks/useClickOutsideAndClose';

type Props = {
    activeItem: any;
    setActiveItem: any;
    data: any[];
    name: string;
    type: 'default' | 'transparent' 
    typeSelector?: string
    className?: any;
};

export const CommonSelector = function ({activeItem, setActiveItem, data, name, className = '', typeSelector, type = 'default'}: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const listRef = useRef<HTMLDivElement>(null);

    const handleSelect = (item: any) => {
        setActiveItem({ ...item, typeSelector });
        setOpen(false);
    };

    const handleClear = () => {
        setActiveItem(null);
        setOpen(false);
    };

    useClickOutsideAndClose(listRef, () => setOpen(false));

    const handleOpenList = () => {
        setOpen(prev => !prev)
    };

    const handleAddItem = (item:any) => {
        handleSelect(item)
    };

    return (
        <div className={`${type === 'default' ? styles.selector : styles.selectorTransparent} ${className}`} ref={listRef}>
            <div className={styles.selector__input} onClick={handleOpenList}>
                <p className={styles.selector__input_title}>{activeItem?.title || name}</p>
                
                {activeItem ? (
                    <img src={closeIcon} alt="Close" className={styles.selector__input_img} onClick={handleClear} />
                ) : open ? (
                    <img src={arrowUp} alt="Arrow Up" className={styles.selector__input_img} />
                ) : (
                    <img src={arrowDown} alt="Arrow Down" className={styles.selector__input_img} />
                )}
            </div>

            {data && open ? (
                <ul className={styles.selector__list}>
                    {data.map((item) => (
                        <li className={styles.selector__item} key={item.id} onClick={handleAddItem}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
