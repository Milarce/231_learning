import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuBar.module.css";
import logoBDO from "../../img/logo/rsz_bdo_logosvg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
//<FontAwesomeIcon icon={faMagnifyingGlass} />

const MenuBar = (props) => {
  return (
    <div className={styles["sub-header"]}>
      <div className={styles.container}>
        <div className={styles["logo-container"]}>
          <Link to="/">
            <img src={logoBDO} alt="BDO logo" className={styles.logo} />
            <span className={styles.italia}>Italia</span>
          </Link>
        </div>

        <nav className={styles["menu-nav"]}>
          <ul>
            <li>
              <span
                tabIndex="0"
                className="main-item"
                data-view-all="/it-it/services-it"
              >
                <Link to="/list-company">Aziende</Link>
              </span>
            </li>
            <li>
              <span
                tabIndex="0"
                className="main-item"
                data-view-all="/it-it/industries-it"
              >
                <Link to="/dipendenti">Dipendenti</Link>
              </span>
            </li>
            <li>
              <span
                tabIndex="0"
                className="main-item"
                data-view-all="/it-it/insights-it"
              >
                <a href="https://www.bdo.it/it-it/insights-it">Insights</a>
              </span>
            </li>
            <li>
              <span
                tabIndex="0"
                className="main-item"
                data-view-all="/it-it/chi-siamo"
              >
                <a href="https://www.bdo.it/it-it/chi-siamo">Chi siamo</a>
              </span>
            </li>
            <li>
              <span
                tabIndex="0"
                className="main-item"
                data-view-all="/it-it/chi-siamo/bdo-alumni"
              >
                <a href="https://www.bdo.it/it-it/chi-siamo/bdo-alumni">
                  BDO Alumni
                </a>
              </span>
            </li>
          </ul>
        </nav>
        <form className={styles["search-container"]}>
          <input
            name="searchBox"
            type="text"
            maxLength="1000"
            className={styles["search-input"]}
            autoComplete="off"
            placeholder="Cerca"
          ></input>
          <button
            type="submit"
            name="searchBtn"
            value="Search"
            className={styles["search-icon"]}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default MenuBar;
