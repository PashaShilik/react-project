import React from "react";
import { Card } from "@/components/Card/Card";
import { IAnime } from "@/types/interfaces/IAnime";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.scss";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CardListProps {
    animeList: Array<IAnime>;
}

export function Slider({ animeList }: CardListProps) {

    return (
        <Swiper
            className={styles.slider}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}>
            {animeList.map((anime) => (
                <SwiperSlide
                    key={anime.id}>
                    <Card anime={anime} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}