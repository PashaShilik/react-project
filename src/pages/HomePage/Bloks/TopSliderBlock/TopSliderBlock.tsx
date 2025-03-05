import React, { useState, useEffect } from "react";
import { UniversalSlider } from "@/components/UniversalSlider/UniversalSlider";
import { IAnime } from "@/types/interfaces/IAnime";
import { getTopAnime } from "@/api/animeApi";
import { Card } from "@/components/Card/Card";
import styles from "./topSliderBlock.module.scss";

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
      <UniversalSlider
        data={animeList}
        renderItem={(item) => (
          <Card
            data={item}
            showScore={true}
            showBookmark={true}
            showYear={true}
            showTitle={true}
            showGenres={true}
          />
        )}
      />
    </div>
  );
}
