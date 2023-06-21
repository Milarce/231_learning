import React from "react";
import styles from "./ListingTable.module.css";

const ListingTable = (props) => {
  return (
    <div className="table">
      <div className="table-header">
        {props.headers.map((header, index) => (
          <div key={index} className="table-cell">
            {header}
          </div>
        ))}
      </div>
      <div className="table-body">
        {props.rows.map((row, index) => (
          <div key={index} className="table-row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="table-cell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingTable;
