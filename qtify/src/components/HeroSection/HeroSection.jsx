import React from "react";
import styles from "./HeroSection.module.css";
import headphone from "../../assets/headphone.png";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.headline}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
      </div>
      <div>
        <img src={headphone} alt="headphone" className={styles.headph} />
      </div>
    </div>
  );
};
export default HeroSection;
