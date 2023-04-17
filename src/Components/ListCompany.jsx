import React from "react";
import companies from "../DATA/aziende.json";
//import styles from "./ListCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";

const ListCompany = () => {
  return (
    <React.Fragment>
      <HeaderTable />
      {companies.map((company, i) => {
        return <RowsTable key={i} data={company} />;
      })}
    </React.Fragment>
  );
};

export default ListCompany;
