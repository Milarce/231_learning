import React from "react";
//import companies from "../DATA/aziende.json";
import styles from "./ListCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import Button from "./Miscellany/Button";
import CompanyLogo from "./Miscellany/CompanyLogo";
import logoLearning from "../img/logo/logo_231/231-logo-color.png";

const ListCompany = (props) => {
  const addNewCompany = (second) => {};
  return (
    <React.Fragment>
      <CompanyLogo logoPath={logoLearning} companyName={"Le tue aziende"} />
      <HeaderTable rows={props.headerText} sendStyles={props.sizeArr} />
      {props.companiesDetails.map((company, i) => {
        return <RowsTable key={i} rows={company} sendStyles={props.sizeArr} />;
      })}
      <footer className={`${styles.table} ${styles["btn-container"]}`}>
        <Button
          btnType={"submit"}
          text={"Crea"}
          btnStyle={"create"}
          btnAction={addNewCompany}
        />
      </footer>
    </React.Fragment>
  );
};

export default ListCompany;
