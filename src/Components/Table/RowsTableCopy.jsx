import React from "react";
import styles from "./RowsTableCopy.module.css";
import ItemRowsTable from "./ItemRowsTable";

const RowsTableCopy = (props) => {
  return (
    <ul className={styles.table}>
      {props.rows.map((item, i) => {
        return <ItemRowsTable key={i} text={item} size={props.sendStyles[i]} />;
      })}
    </ul>
  );
};

export default RowsTableCopy;
