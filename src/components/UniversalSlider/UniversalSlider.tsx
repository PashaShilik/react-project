import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./universalSlider.module.scss";
import { UniversalData } from "@/types/interfaces/universalData";

interface UniversalSliderProps {
  data: UniversalData[];
  renderItem: (item: UniversalData) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number;
    };
  };
  navigation?: boolean;
  pagination?: boolean;
  autoplay?: boolean;
}

export function UniversalSlider({
  data,
  renderItem,
  slidesPerView = 4,
  spaceBetween = 20,
  breakpoints = {
    1080: { slidesPerView: 4 },
    820: { slidesPerView: 3 },
    560: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
  navigation = true,
  pagination = true,
  autoplay = true,
}: UniversalSliderProps) {
  return (
    <Swiper
      className={styles.slider}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      navigation={navigation}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: true } : false}
    >
      {data.map((item, index) => (
        <SwiperSlide style={{ height: 320 }} key={index}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
