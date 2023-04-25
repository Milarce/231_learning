import React from "react";
import styles from "./RowsTable.module.css";
import ItemRowsTable from "./ItemRowsTable";

const RowsTable = (props) => {
  return (
    <ul className={styles.table}>
      {props.rows.map((item, i) => {
        return (
          <ItemRowsTable key={i} size={props.sendStyles[i]}>
            <span>{item}</span>
          </ItemRowsTable>
        );
      })}
    </ul>
  );
};

export default RowsTable;
