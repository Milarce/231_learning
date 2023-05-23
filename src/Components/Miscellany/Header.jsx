import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import styles from "./Header.module.css";
import Social from "./Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
//import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header className={styles["main-header"]}>
      <div className={styles.container}>
        <Social classType="social-flex" />
        <nav className={styles["header-nav"]}>
          <ul>
            <li>
              <a target="_blank" href="https://www.bdo.global/">
                GLOBAL NETWORK
              </a>
            </li>
            <li>
              <a href="/it-it/uffici-it">Uffici</a>
            </li>
            <li>
              <a href="/it-it/contatti">Contatti</a>
            </li>
            <li>
              <a href="/it-it/eventi">Eventi</a>
            </li>
            <li>
              <a href="/it-it/people-it">People</a>
            </li>
            <li>
              <a href="/it-it/news-it">News</a>
            </li>
            <li>
              <a href="/it-it/careers-it">Careers</a>
            </li>
          </ul>
          <Link to="/login">
            <Button btnType={"button"} btnStyle={"login"}>
              <FontAwesomeIcon icon={faUser} />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
