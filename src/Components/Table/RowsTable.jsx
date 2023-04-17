import React from "react";
import styles from "./RowsTable.module.css";

const RowsTable = (props) => {
  return (
    <ul className={styles.table}>
      <li className={`${styles.list} ${styles.item} ${styles.first}`}>
        <span>{props.data.idAzienda}</span>
      </li>
      <li className={`${styles.list} ${styles.item} ${styles.scnd} `}>
        <span>{props.data.desAzienda}</span>
      </li>
      <li className={`${styles.list} ${styles.item} ${styles.third} `}>
        <span>{props.data.DesQuestionario}</span>
      </li>
      <li className={`${styles.list} ${styles.item} ${styles.fourth} `}>
        <span>{props.data.Documentation}</span>
      </li>
      <li className={`${styles.list} ${styles.item} ${styles.fifth} `}>
        <span>{props.data.Images}</span>
      </li>
    </ul>
  );
};

export default RowsTable;
