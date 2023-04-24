import React from "react";
import styles from "./ItemRowsTableCopy.module.css";

const ItemRowsTableCopy = (props) => {
  return (
    <div className={`${styles.list} ${styles.item} ${styles[`${props.size}`]}`}>
      {props.children}
    </div>
  );
};

export default ItemRowsTableCopy;
