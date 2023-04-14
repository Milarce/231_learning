import React from "react";
import companies from "../DATA/aziende.json";
import styles from "./ListCompany.module.css";

const ListCompany = () => {
  return (
    <React.Fragment>
      <header>
        <ul className={styles["table-header"]}>
          <li className={`${styles.list} ${styles.top} ${styles.first}`}>ID</li>
          <li className={`${styles.list} ${styles.top} ${styles.scnd}`}>
            Nome Azienda
          </li>
          <li className={`${styles.list} ${styles.top} ${styles.third}`}>
            Questionario
          </li>
          <li className={`${styles.list} ${styles.top} ${styles.fourth}`}>
            Documentazione
          </li>
          <li className={`${styles.list} ${styles.top} ${styles.fifth}`}>
            Logo
          </li>
        </ul>
      </header>
      {companies.map((company) => {
        return (
          <ul className={styles.table}>
            <li className={`${styles.list} ${styles["item"]} ${styles.first}`}>
              <span>{company.idAzienda}</span>
            </li>
            <li className={`${styles.list} ${styles["item"]} ${styles.scnd} `}>
              <span>{company.desAzienda}</span>
            </li>
            <li className={`${styles.list} ${styles["item"]} ${styles.third} `}>
              <span>{company.DesQuestionario}</span>
            </li>
            <li
              className={`${styles.list} ${styles["item"]} ${styles.fourth} `}
            >
              <span>{company.Documentation}</span>
            </li>
            <li className={`${styles.list} ${styles["item"]} ${styles.fifth} `}>
              <span>{company.Images}</span>
            </li>
          </ul>
        );
      })}
    </React.Fragment>
  );
};

export default ListCompany;
