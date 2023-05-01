import React, { useState } from "react";
import styles from "./EditCompany.module.css";
import logoCmpny from "../img/logo/logo_granarolo.jpg";
import RowsTable from "./Table/RowsTable";
import ListSteps from "./ListSteps";
import HeaderTable from "./Table/HeaderTable";
import CreateCompany from "./CreateCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import CompanyLogo from "./Miscellany/CompanyLogo";
import Button from "./Miscellany/Button";

const EditCompany = (props) => {
  const tableHeaderFasi = ["Id", "Descrizione", "Modifica"];
  const setStylesFasi = ["one-size", "seven-size", "one-size"];

  const [IsVisible, setIsVisible] = useState(false);

  const showUpdateWindow = () => {
    setIsVisible(() => !IsVisible);
  };

  const extractValues = (companyObj) => {
    const values = Object.values(companyObj);
    return [
      ...values.slice(0, 5),
      <button className="btn" onClick={showUpdateWindow}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>,
    ];
  };

  const extractStepsArr = (companyObj) => {
    const { fasi } = companyObj;
    return fasi;
  };

  return (
    <React.Fragment>
      <CompanyLogo
        logoPath={logoCmpny}
        companyName={props.myCompany.desAzienda}
      />
      <HeaderTable rows={props.headerText} sendStyles={props.sizeArr} />

      <RowsTable
        rows={extractValues(props.myCompany)}
        sendStyles={props.sizeArr}
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
          updateStep={props.updateSteps}
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
      {IsVisible && (
        <CreateCompany
          headers={props.headerText}
          onClose={showUpdateWindow}
          companyData={props.myCompany}
          onCreate={props.onCreate}
          windowsType={{
            headerText: "Modifica azienda",
            btnText: "Fatto",
          }}
        />
      )}
    </React.Fragment>
  );
};

export default EditCompany;
