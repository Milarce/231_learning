import React from "react";
//import companies from "../DATA/aziende.json";
//import styles from "./ListCompany.module.css";
import HeaderTableCopy from "./Table/HeaderTableCopy";
import RowsTableCopy from "./Table/RowsTableCopy";

const ListCompany = (props) => {
  return (
    <React.Fragment>
      <HeaderTableCopy rows={props.headerText} sendStyles={props.sizeArr} />
      {props.companiesDetails.map((company, i) => {
        return (
          <RowsTableCopy key={i} rows={company} sendStyles={props.sizeArr} />
        );
      })}
    </React.Fragment>
  );
};

export default ListCompany;
