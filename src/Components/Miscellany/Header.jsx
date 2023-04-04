import React from "react";
import Button from "./Button";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.bdoHeader}>
      <img src="../../img/logo/rsz_bdo_logosvg.png" alt="logo_bdo" />
      <nav>
        <ul>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </nav>
      <Button btnType={"button"} text={"A"} />
    </header>
  );
};

export default Header;
