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
            slidesPerView={4}
            breakpoints={{
                1080: {
                    slidesPerView: 4,
                },
                820: {
                    slidesPerView: 3,
                },
                560: {
                    slidesPerView: 2,
                },
                320: {
                    slidesPerView: 1
                }
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}>
            {animeList.map((anime) => (
                <SwiperSlide style={{ height: 320 }}
                    key={anime.id}>
                    <Card anime={anime} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

