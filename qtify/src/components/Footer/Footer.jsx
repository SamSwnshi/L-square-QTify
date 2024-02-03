import React from "react";
import style from "./Footer.module.css";
import Slider from "@mui/material/Slider";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import headphone from "../../assets/headphone.png"

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.songBox}>
        

        <img src={headphone} alt=""className={style.songImg} />
      
        <div>
        <h2 className={style.name}>Song Name</h2>
        <h4 className={style.album}>Album Name</h4>

        </div>
      </div>

      <div className={style.icons}>
        <PlayCircleFilledIcon fontSize="large"/>
      </div>
      <Slider className={style.musicbar} />
    </div>
  );
};

export default Footer;
