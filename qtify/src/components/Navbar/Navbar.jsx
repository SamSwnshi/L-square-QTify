import React from "react";
import styles from "./Navbar.module.css";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>
      <Search placeholder={"Search a album of your choice"} />
      <Button />
    </nav>
  );
};

export default Navbar;
