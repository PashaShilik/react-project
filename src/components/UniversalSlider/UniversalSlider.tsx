import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./universalSlider.module.scss";
import { UniversalData } from "@/types/interfaces/universalData";

import ArrLeft from '@/assets/svg/ArrLeft.svg';
import ArrRight from '@/assets/svg/ArrRight.svg'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './styles.css';

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

  const swiperRef = useRef<any>(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); 
    }
  };

  return (
    <div className={styles.slider}>
      <Swiper
      className="mySwiper"
      ref={swiperRef}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }} 
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 3000, disableOnInteraction: true } : false}
      >
      {data.map((item, index) => (
        <SwiperSlide style={{ height: 320 }} key={index}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>

      <div className="custom-prev" onClick={handlePrev}>
        <img src={ArrLeft} alt="Назад" className={styles.slider__slide_arrow}/>
      </div>
      <div className="custom-next" onClick={handleNext}>
        <img src={ArrRight} alt="Вперед" className={styles.slider__slide_arrow}/>
      </div>
    </div>
  );
}
