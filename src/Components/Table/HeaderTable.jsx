import React from "react";
import styles from "./HeaderTable.module.css";

const HeaderTable = () => {
  return (
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
        <li className={`${styles.list} ${styles.top} ${styles.fifth}`}>Logo</li>
      </ul>
    </header>
  );
};

export default HeaderTable;
