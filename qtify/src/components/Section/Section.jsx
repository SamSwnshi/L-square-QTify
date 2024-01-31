import React, { useEffect, useState } from "react";
import style from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filters/Filters";

const Section = ({ title, data, fetchSource, type }) => {
  const [caroselToggle, setCaroselToggle] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggle = () => {
    setCaroselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (fetchSource) {
      fetchSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);
  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div>
      <div className={style.header}>
        <h3>{title}</h3>
        <h4 className={style.toggleText} onClick={handleToggle}>
          {!caroselToggle ? "Collaspe All" : "Show All"}
        </h4>
      </div>
      {showFilters && (
        <div className={style.filterWrapper}>
          <Filter
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {cardsToRender.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={style.cardWrapper}>
          {!caroselToggle ? (
            //normal logic
            <div className={style.wrapper}>
              {cardsToRender.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            //carousel logic
            <Carousel
              data={cardsToRender}
              renderComponent={(d) => <Card data={d} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
