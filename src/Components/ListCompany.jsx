import React from "react";
import companies from "../DATA/aziende.json";
//import styles from "./ListCompany.module.css";
import HeaderTable from "./Miscellany/HeaderTable";
import RowsTable from "./Miscellany/RowsTable";

const ListCompany = () => {
  return (
    <React.Fragment>
      <HeaderTable />
      {companies.map((company) => {
        return <RowsTable data={company} />;
      })}
    </React.Fragment>
  );
};

export default ListCompany;
