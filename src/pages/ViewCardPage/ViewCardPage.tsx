import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAnimeById, getAnimeCharacters } from '@/api/animeApi';
import { MovieData } from '@/types/interfaces/MovieData';
import { CharacterResponse } from '@/types/interfaces/Character';
import { UniversalSlider } from "@/components/UniversalSlider/UniversalSlider";
import { Card } from "@/components/Card/Card";
import { CommonButton } from '@/components/Common/CommonButton/CommonButton';
import { InfoPanel } from './Blocks/InfoPanel/InfoPanel';
import { Marks } from './Blocks/Marks/Marks';
import { ROUTES } from '@/routes/routes';
import arrowLeft from '@/assets/svg/arrowLeft.svg';
import styles from './viewCardPage.module.scss';
import { ErrorMessage } from '@/components/ErrorMessage/ErrorMessage';

export const ViewCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [animeData, setAnimeData] = useState<MovieData | null>(null);
  const [characters, setCharacters] = useState<CharacterResponse[]>([]);
  const [backgroundUrl, setBackgroundUrl] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnimeData();
    fetchAnimeCharacters();
  }, [id]);

  const fetchAnimeData = async () => {
    if (id) {
      const data = await getAnimeById(Number(id));
      setBackgroundUrl(data?.imageUrl || undefined);
      setAnimeData(data);
    }
  };

  const fetchAnimeCharacters = async () => {

    try {
      if (id) {
        const data = await getAnimeCharacters(Number(id));
        setCharacters(data);
      }
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTES.home);
  };

  const handleWatchTrailer = () => {
    if (animeData?.trailer.embed_url) {
      window.open(animeData?.trailer.embed_url, '_blank');
    }
  };

  return (
    <div className={styles.viewCardPage}>
      <div className={styles.viewCardPage__back}>
        <CommonButton text="Go back" type="default_bg_none_img" image={arrowLeft} onClick={handleHomeClick}/>
      </div>
      <img src={backgroundUrl} alt="background" className={styles.viewCardPage__background} />
      <div className={styles.viewCardPage__container}>
        <div className={styles.viewCardPage__img_container}>
          <img
            className={styles.viewCardPage__img}
            src={animeData?.imageUrl}
            alt={animeData?.title}
          />
          <CommonButton
            text={animeData?.trailer.embed_url ? 'Watch trailer' : 'Trailer is missing'}
            type="default_bg"
            onClick={handleWatchTrailer}
            disabled={!animeData?.trailer.embed_url}
          />
        </div>
        <div className={styles.viewCardPage__main}>
          <h1 className={styles.viewCardPage__main_title}>{animeData?.title}</h1>
          <Marks animeData={animeData} />
          <p className={styles.viewCardPage__description}>{animeData?.synopsis}</p>
        </div>
        <InfoPanel animeData={animeData} />
      </div>

      <div className={styles.viewCardPage__characters}>
        <h2 className={styles.viewCardPage__characters_title}>Characters</h2>
        {error ? (
          <ErrorMessage />
        ) : (
          <UniversalSlider
            data={characters.map(({ character }) => ({
              id: character.id,
              imageUrl: character.images.webp.image_url,
              title: character.name,
              name: character.name,
              images: character.images,
            }))}
            renderItem={(item) => (
              <Card
                data={item}
                showTitle={true}
                showGenres={false}
              />
            )}
            pagination={false}
          />
        )}
      </div>
    </div>
  );
};
