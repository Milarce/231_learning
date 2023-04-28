import React from "react";
import styles from "./EditCompany.module.css";
import logoCmpny from "../img/logo/logo_granarolo.jpg";
import RowsTable from "./Table/RowsTable";
import ListSteps from "./ListSteps";
import HeaderTable from "./Table/HeaderTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import CompanyLogo from "./Miscellany/CompanyLogo";
import Button from "./Miscellany/Button";

const EditCompany = (props) => {
  const tableHeaderFasi = ["Id", "Descrizione", "Modifica"];
  const setStylesCompany = [
    "one-size",
    "four-size",
    "seven-size",
    "two-size",
    "two-size",
  ];
  const setStylesFasi = ["one-size", "seven-size", "one-size"];

  const extractValues = (companyObj) => {
    //const companyObj = extractCompany(id);
    const values = Object.values(companyObj);
    return values.slice(0, 5);
  };

  const extractStepsArr = (companyObj) => {
    //const company = extractCompany(id);
    const { fasi } = companyObj;
    return fasi;
  };
  /*
  const updateStep = (stepObj) => {
    const company = { ...props.myCompany };
    company.fasi[stepObj.id] = { ...stepObj };
    console.log(company);
  };
  */

  return (
    <React.Fragment>
      <CompanyLogo
        logoPath={logoCmpny}
        companyName={props.myCompany.desAzienda}
      />
      <HeaderTable rows={props.headerText} sendStyles={props.sizeArr} />

      <RowsTable
        rows={extractValues(props.myCompany)}
        sendStyles={setStylesCompany}
      />

      <div className={styles["steps-container"]}>
        <div className="steps">
          <p className={styles["step-title"]}>Fasi</p>
        </div>

        <ListSteps
          headerText={tableHeaderFasi}
          headerStyles={setStylesFasi}
          stepsArr={extractStepsArr(props.myCompany)}
          rowsStyles={setStylesFasi}
          updateStep={props.updateCompany}
        />
      </div>
      <footer className={`${styles.table} ${styles["btn-container"]}`}>
        <Button
          btnType={"button"}
          btnAction={props.btnAction}
          btnText={"Fatto"}
          btnStyle={"create"}
        />
      </footer>
    </React.Fragment>
  );
};

export default EditCompany;
