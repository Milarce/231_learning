import React from "react";
import styles from "./ItemRowsTable.module.css";

const ItemRowsTable = (props) => {
  return (
    <li className={`${styles.list} ${styles.item} ${styles[`${props.size}`]}`}>
      {props.text}
    </li>
  );
};

export default ItemRowsTable;
