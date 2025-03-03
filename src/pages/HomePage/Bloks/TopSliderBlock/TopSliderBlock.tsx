import React, { useState,useEffect } from "react";
import { Slider } from "./Blocks/Slider";
import { IAnime } from "@/types/interfaces/IAnime";
import { getTopAnime } from "@/api/animeApi";
import styles from "./topSliderBlock.module.scss"

export function TopSliderBlock() {
    const [animeList, setAnimeList] = useState<Array<IAnime>>([]);

  useEffect(() => {
    onRequestAnime();
  }, []);

  const onRequestAnime = async () => {
    const data = await getTopAnime();
    setAnimeList(data);
  };



    return (
        <div className={styles.top__list}>
            <h2 className={styles.top__list_title}>Top 10 anime</h2>
            <Slider animeList={animeList}/>
        </div>
    )
}