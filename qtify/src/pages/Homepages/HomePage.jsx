import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import style from "./HomePage.module.css";

const Homepage = () => {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  return (
    <>
      <HeroSection />
      <div className={style.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
      </div>
    </>
  );
};

export default Homepage;
