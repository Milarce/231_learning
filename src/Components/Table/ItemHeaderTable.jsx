import React from "react";
import styles from "./ItemHeaderTable.module.css";

const ItemHeaderTable = (props) => {
  return (
    <React.Fragment>
      <li className={`${styles.list} ${styles.top} ${styles[`${props.size}`]}`}>
        {props.text}
      </li>
    </React.Fragment>
  );
};

export default ItemHeaderTable;
