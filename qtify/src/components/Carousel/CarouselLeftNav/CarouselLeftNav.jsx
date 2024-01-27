import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/left.svg";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNav.module.css";

function CarouselLeftNav() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, []);
  return (
    <div className={styles.leftNav}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
}

export default CarouselLeftNav;
