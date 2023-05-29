import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Store/update-context";
import Button from "./Button";
import styles from "./Header.module.css";
import Social from "./Social";
import { validateUser } from "../../validation/ValidateUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
//import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  //const [loggedIn, setLoggedIn] = useState(false);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  /*   useEffect(() => {
    console.log("Header renders");
  }, []); */

  const handleLogin = () => {
    ctx.authObj.loggedIn ? setIsVisible(!isVisible) : navigate("/login");
  };

  const handleLogout = () => {
    localStorage.setItem("token", "");
    ctx.setAuthObj((authObj) => {
      return { ...authObj, loggedIn: false };
    });
    setIsVisible((isVisible) => (isVisible = false));
    navigate("/login");
  };

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

          <Button btnType={"button"} btnStyle={"login"} btnAction={handleLogin}>
            {!ctx.authObj.loggedIn ? (
              <FontAwesomeIcon icon={faUser} />
            ) : (
              ctx.authObj.user.toUpperCase().split("", 1)
            )}
          </Button>

          {isVisible && (
            <div className={styles["logout-container"]}>
              <span className={styles["el--1"]}>BDO Italia</span>
              <span className={styles["el--2"]} onClick={handleLogout}>
                Logout
              </span>
              <div className={styles.user}>
                <span className={styles["el--3"]}>{ctx.authObj.fullName}</span>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
