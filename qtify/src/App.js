import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { fetchAlbums, fetchNewAlbums, fetchNewSongs } from "./api/api";
import { useEffect, useState } from "react";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer"

function App() {
  const [searchData, useSearchData] = useState();
  const [data, setData] = useState({});
  const genrateData = (key, source) => {
    source().then((data) => {
      setData((prevData) => {
        return { ...prevData, [key]: data };
      });
    });
  };
  useEffect(() => {
    genrateData("topAlbums", fetchAlbums);
    genrateData("newAlbums", fetchNewAlbums);
    genrateData("songs", fetchNewSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  return (
    <>
      <div>
        <Navbar />
        <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
        <Faq/>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
