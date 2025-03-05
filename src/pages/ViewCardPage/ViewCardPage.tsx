import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAnimeById, getAnimeCharacters } from '@/api/animeApi';
import { MovieData } from '@/types/interfaces/MovieData';
import { CharacterResponse } from '@/types/interfaces/Character';
import { UniversalSlider } from "@/components/UniversalSlider/UniversalSlider";
import { Card } from "@/components/Card/Card";
import { CommonButton } from '@/components/Common/CommonButton/CommonButton';
import { MovieDetails } from './Blocks/MovieDetails/MovieDetails';
import { ROUTES } from '@/routes/routes';
import arrowLeft from '@/assets/svg/arrowLeft.svg';
import styles from './viewCardPage.module.scss';

export const ViewCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [animeData, setAnimeData] = useState<MovieData | null>(null);
  const [characters, setCharacters] = useState<CharacterResponse[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    fetchAnimeData();
    fetchAnimeCharacters();
  }, [id]);

  const fetchAnimeData = async () => {
    if (id) {
      const data = await getAnimeById(Number(id));
      setAnimeData(data);
    }
  };

  const fetchAnimeCharacters = async () => {
    if (id) {
      const data = await getAnimeCharacters(Number(id));
      setCharacters(data);
    }
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const checkDescriptionLength = (description: string, maxWords: number = 100) => {
    return description.split(' ').length <= maxWords;
  };

  const isShortDescription = checkDescriptionLength(animeData?.synopsis || '');

  const handleTrailerClick = () => {
    setIsVideoPlaying(true);
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(ROUTES.home);
  };

  return (
    <div className={styles.viewCardPage}>
      <div className={styles.viewCardPage__container}>
        <CommonButton
          text="Go back"
          type="default_bg_none_img"
          image={arrowLeft}
          onClick={handleHomeClick}
        />
        <h1 className={styles.viewCardPage__title}>{animeData?.title}</h1>
        <div className={styles.viewCardPage__movie_card}>
          <div className={styles.viewCardPage__image_container}>
            <img
              src={animeData?.images.webp.large_image_url}
              alt={animeData?.title}
              className={styles.viewCardPage__image}
            />
          </div>
          {animeData && <MovieDetails movieData={animeData} />}
          <div
            className={`${styles.viewCardPage__full_description} ${isExpanded ? styles.viewCardPage__expanded : ''}`}
          >
            <p className={styles.viewCardPage__description_text}>{animeData?.synopsis}</p>
          </div>
          {!isShortDescription && (
            <CommonButton
              type="default_bg"
              text={isExpanded ? 'Hide' : 'Show more'}
              onClick={toggleDescription}
              aria-expanded={isExpanded}
            />
          )}
        </div>
      </div>
      <div className={styles.viewCardPage__trailer}>
        <h2 className={styles.viewCardPage__trailer_title}>Trailer</h2>
        {animeData?.trailer.embed_url ? (
          isVideoPlaying ? (
            <iframe
              className={styles.viewCardPage__trailer_media}
              src={animeData.trailer.embed_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={animeData.trailer.images.small_image_url}
              alt="Trailer Preview"
              className={styles.viewCardPage__trailer_media}
              onClick={handleTrailerClick}
            />
          )
        ) : (
          <p className={styles.viewCardPage__trailer_text}>Trailer is missing</p>
        )}
      </div>
      <div className={styles.viewCardPage__characters}>
        <h2 className={styles.viewCardPage__characters_title}>Characters</h2>
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
      </div>
    </div>
  );
};
