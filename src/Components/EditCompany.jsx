import React from "react";
import styles from "./EditCompany.module.css";
import logoCmpny from "../img/logo/logo_granarolo.jpg";
import RowsTable from "./Table/RowsTable";
import EditStep from "./EditStep";
import ListSteps from "./ListSteps";
import HeaderTable from "./Table/HeaderTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import CompanyLogo from "./Miscellany/CompanyLogo";
import Button from "./Miscellany/Button";

/*<ul className={styles["table-header"]}>
            {tableHeaderFasi.map((item, i) => {
              return (
                <ItemHeaderTable key={i} text={item} size={setStylesFasi[i]} />
              );
            })}
  </ul> */

/*{extractSteps(hardcodedId).map((faseText, i) => {
            return (
              <RowsTableCopy
                key={i}
                rows={faseText}
                sendStyles={setStylesFasi}
              />
            );
          })}*/

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
    /*
    const textArr = fasi.map((fase) => {
      const faseValues = Object.values(fase);
      return [
        ...faseValues.slice(0, 2),
        <FontAwesomeIcon icon={faPenToSquare} />,
      ];
    });
    return textArr;*/
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
        />
      </div>
      <footer className={`${styles.table} ${styles["btn-container"]}`}>
        <Button
          btnType={"button"}
          btnAction={""}
          btnText={"Fatto"}
          btnStyle={"create"}
        />
      </footer>
    </React.Fragment>
  );
};

export default EditCompany;
