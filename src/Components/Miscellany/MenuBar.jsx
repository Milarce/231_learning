import React from "react";
import styles from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <menu className={styles["sub-header"]}>
      <div className={styles.container}>
        <div className={styles["logo-container"]}>
          <a id="logoLink" href="https://www.bdo.it/it-it/home-it">
            <img
              src="../../../img/logo/rsz_bdo_logosvg.png"
              alt="BDO logo"
              className="logo"
            />
            <span id="mfname">ITALIA</span>
          </a>
        </div>

        <nav>
          <ul>
            <li>
              <span
                tabindex="0"
                className="main-item"
                data-view-all="/it-it/services-it"
              >
                <a href="https://www.bdo.it/it-it/services-it">Services</a>
              </span>
            </li>
            <li>
              <span
                tabindex="0"
                className="main-item"
                data-view-all="/it-it/industries-it"
              >
                <a href="https://www.bdo.it/it-it/industries-it">Industries</a>
              </span>
            </li>
            <li>
              <span
                tabindex="0"
                className="main-item"
                data-view-all="/it-it/insights-it"
              >
                <a href="https://www.bdo.it/it-it/insights-it">Insights</a>
              </span>
            </li>
            <li>
              <span
                tabindex="0"
                className="main-item"
                data-view-all="/it-it/chi-siamo"
              >
                <a href="https://www.bdo.it/it-it/chi-siamo">Chi siamo</a>
              </span>
            </li>
            <li>
              <span
                tabindex="0"
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

        <div className={styles["search-container"]}>
          <input
            name="searchBox"
            type="text"
            maxlength="1000"
            className="search-input form-control"
            autocomplete="off"
          ></input>
          <input
            type="submit"
            name="searchBtn"
            value="Search"
            className="icon btn btn-default"
          ></input>
        </div>
      </div>
    </menu>
  );
};

export default MenuBar;
