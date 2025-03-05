import styles from "./bookMark.module.scss";
import favoritesIco from '@/assets/svg/favorites.svg'

type Props = {
 onClick: (e:any) => void;
 addFavorite: boolean;
};

export function BookMark({onClick, addFavorite}:Props) {
    return (
         <div className={styles.bookMark} onClick={onClick}>
           <img className={`${addFavorite ? styles.bookMark__active_ico : styles.bookMark__ico}`} src={favoritesIco} alt="ico" />
        </div>
    )
}