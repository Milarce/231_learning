import React from "react";
import styles from "./ItemRowsTable.module.css";

const ItemRowsTable = (props) => {
  return (
    <li className={`${styles.list} ${styles.item} ${styles[`${props.size}`]}`}>
      {props.children}
    </li>
  );
};

export default ItemRowsTable;
