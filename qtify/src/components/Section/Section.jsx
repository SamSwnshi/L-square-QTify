import React, { useState } from "react";
import style from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";

const Section = ({ title, data, type }) => {
  const [caroselToggle, setCaroselToggle] = useState(false);

  const handleToggle = () => {
    setCaroselToggle((prevState) => !prevState);
  };
  return (
    <div>
      <div className={style.header}>
        <h3>{title}</h3>
        <h4 className={style.toggleText} onClick={handleToggle}>
          {!caroselToggle ? "Collaspe All" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={style.cardWrapper}>
          {!caroselToggle ? (
            //normal logic
            <div className={style.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            //carousel logic
            <div>Carousel</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
