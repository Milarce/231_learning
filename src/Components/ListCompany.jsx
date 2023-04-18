import React from "react";
import companies from "../DATA/aziende.json";
//import styles from "./ListCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import RowsTableCopy from "./Table/RowsTableCopy";

const ListCompany = () => {
  const setStyles = [
    "one-size",
    "four-size",
    "seven-size",
    "two-size",
    "two-size",
  ];

  const extractValues = (companyObj) => {
    const values = Object.values(companyObj);
    return values.slice(0, 5);
  };

  return (
    <React.Fragment>
      <HeaderTable />
      {companies.map((company, i) => {
        return (
          <RowsTableCopy
            key={i}
            rows={extractValues(company)}
            sendStyles={setStyles}
          />
        );
      })}
    </React.Fragment>
  );
};

export default ListCompany;
