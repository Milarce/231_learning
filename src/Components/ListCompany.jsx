import React from "react";
//import companies from "../DATA/aziende.json";
//import styles from "./ListCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";

const ListCompany = (props) => {
  return (
    <React.Fragment>
      <HeaderTable rows={props.headerText} sendStyles={props.sizeArr} />
      {props.companiesDetails.map((company, i) => {
        return <RowsTable key={i} rows={company} sendStyles={props.sizeArr} />;
      })}
    </React.Fragment>
  );
};

export default ListCompany;
