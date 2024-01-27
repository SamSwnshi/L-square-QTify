import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import CarouselLeftNav from "./CarouselLeftNav/CarouselLeftNav";
import CarsoselRightNav from "./CarouselRightNav/CarsoselRightNav";
import styles from "./Carousel.module.css";

import "swiper/css";

const Control = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        // install Swiper modules
        // style={{ padding: "0px 20px" }}
        modules={[Navigation]}
        initialState={0}
        spaceBetween={30}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Control data={data} />
        <CarouselLeftNav />
        <CarsoselRightNav />
        {data.map((ele, idx) => (
          <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
