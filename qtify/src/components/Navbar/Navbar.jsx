import React from "react";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search placeholder={"Search a album of your choice"} />
      <Button />
    </nav>
  );
};

export default Navbar;
