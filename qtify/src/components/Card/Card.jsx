import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { Tooltip, Chip } from "@mui/material";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, songs, slug } = data;

        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`}>
              <div className={style.wrapper}>
                <div className={style.card}>
                  <img
                    src={image}
                    alt="album"
                    loading="lazy"
                    className={style.img}
                  />
                  <div className={style.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={style.chip}
                    />
                  </div>
                </div>
                <div className={style.titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={style.wrapper}>
            <div className={style.card}>
              <img
                src={image}
                alt="song"
                loading="lazy"
                className={style.img}
              />
              <div className={style.banner}>
                <div className={style.pill}>
                  <p>{likes}Likes</p>
                </div>
              </div>
            </div>
            <div className={style.titleWrapper}>
              <p>{title}</p>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;
