import React from "react";
import style from "./HeroSection.module.css";
import headphone from "../../assets/headphone.png";

const HeroSection = () => {
  return (
    <>
      <div className={style.hero}>
        <p className={style.headline}>
          100 Thousand Songs, ad-free
          <br /> Over thousand podcast episodes
        </p>
        <img src={headphone} alt="headphone" className={style.headph} />
      </div>
    </>
  );
};
export default HeroSection;
