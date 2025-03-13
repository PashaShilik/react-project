import React, { useState, useEffect } from "react";
import { UniversalSlider } from "@/components/UniversalSlider/UniversalSlider";
import { Anime } from "@/types/interfaces/Anime";
import { getTopAnime } from "@/api/animeApi";
import { Card } from "@/components/Card/Card";
import { CommonLoader } from "@/components/Common/CommonLoader/CommonLoader";
import styles from "./topSliderBlock.module.scss";
import wrapper from '../CardListBlock/cardListBlock.module.scss'


export function TopSliderBlock() {
  const [animeList, setAnimeList] = useState<Array<Anime>>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onRequestAnime();
  }, []);

  const onRequestAnime = async () => {
    const data = await getTopAnime();
    setAnimeList(data);
    setLoading(false);
  };

  return (
    <div className={styles.top__list}>
      <h2 className={styles.top__list_title}>Top 10 anime</h2>
      <UniversalSlider
        data={animeList}
        renderItem={(item) => (
          <Card data={item} showScore showBookmark showYear showTitle showGenres/>
        )}
      />
      <div className={wrapper.loader__wrapper}>
        {loading && <CommonLoader />}
      </div>
    </div>
  );
}
