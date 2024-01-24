import React, { useEffect, useState } from "react";
import style from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";
import axios from "axios";

const Card = ({ data, type }) => {
  const [topAlbums, setTopAlbums] = useState([]);
  const apiCall = async () => {
    try {
      let response = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      console.log(response.data);
      setTopAlbums(response.data);
    } catch (error) {
      console.log("Error in Fetching Data", error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);
  const getCard = (type) => {
    const albumData = topAlbums || data;
    switch (type) {
      case "album": {
        // const { image, title, follows, songs, slug } = albumData;
        // return (
        //   <Tooltip title={`${songs.length} songs`} placement="top" arrow>
        //     <a href={`/album/${slug}`}>
        //       <div className={style.wrapper}>
        //         <div className={style.card}>
        //           <img src={image} alt="album" loading="lazy" />
        //           <Chip
        //             label={`${follows} Follows`}
        //             size="small"
        //             className={style.chip}
        //           />
        //         </div>
        //         <div className={style.titleWrapper}>
        //           <p>{title}</p>
        //         </div>
        //       </div>
        //     </a>
        //   </Tooltip>
        // );
        return (
          <div className={style.mainWrapper}>
            {albumData.map((album) => (
              <Tooltip
                key={album.slug}
                title={`${album.songs.length} songs`}
                placement="top"
                arrow
              >
                <a href={`/album/${album.slug}`}>
                  <div className={style.wrapper} key={album.slug}>
                    <div className={style.card}>
                      <img
                        src={album.image}
                        alt="album"
                        loading="lazy"
                        className={style.image}
                      />
                      {/* <Chip
                        label={`${album.follows} Follows`}
                        size="small"
                        className={style.chip}
                      /> */}
                      <div className={style.pill}>
                        <p>{`${(album.follows / 1000).toFixed(1)}k Follows`}</p>
                      </div>
                    </div>
                    <div className={style.titleWrapper}>
                      <p>{album.title}</p>
                    </div>
                  </div>
                </a>
              </Tooltip>
            ))}
          </div>
        );
      }
      case "song": {
        const { image, likes, title } = albumData;
        return (
          <div className={style.wrapper}>
            <div className={style.card}>
              <img src={image} alt="song" loading="lazy" />
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
};

export default Card;
