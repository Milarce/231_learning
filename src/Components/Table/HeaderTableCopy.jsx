import React from "react";
import styles from "./HeaderTableCopy.module.css";
import ItemHeaderTable from "./ItemHeaderTable";

const HeaderTableCopy = (props) => {
  return (
    <ul className={styles["table-header"]}>
      {props.rows.map((item, i) => {
        return (
          <ItemHeaderTable key={i} text={item} size={props.sendStyles[i]} />
        );
      })}
    </ul>
  );
};

export default HeaderTableCopy;
