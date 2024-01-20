import React from "react";
import style from "./Search.module.css";
import { ReactComponent as SearchBox } from "../../assets/SearchIcon.svg";

const Search = ({ placeholder }) => {
  return (
    <form action="" className={style.form}>
      <input
        type="text"
        className={style.search}
        placeholder={placeholder}
        required
      />
      <button type="submit" className={style.icon}>
        <SearchBox />
      </button>
    </form>
  );
};

export default Search;
