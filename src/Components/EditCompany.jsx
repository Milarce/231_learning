import React from "react";
import styles from "./EditCompany.module.css";
import logoCmpny from "../img/logo/logo_granarolo.jpg";
import companies from "../DATA/aziende.json";
import ItemHeaderTable from "./Table/ItemHeaderTable";
import RowsTableCopy from "./Table/RowsTableCopy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditStep from "./EditStep";
import ListSteps from "./ListSteps";

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
  const tableHeaderCompany = [
    "ID",
    "Nome Azienda",
    "Questionario",
    "Documentazione",
    "Logo",
  ];
  const setStylesCompany = [
    "one-size",
    "four-size",
    "seven-size",
    "two-size",
    "two-size",
  ];
  const setStylesFasi = ["one-size", "seven-size", "one-size"];
  const hardcodedId = "31190";
  const hardCodedStep = ["Mail invito scarico documentazione"];

  const extractCompany = (companyId) => {
    const companyObj = companies.find(
      (company) => company.idAzienda === companyId
    );
    return companyObj;
  };

  const extractValues = (id) => {
    const companyObj = extractCompany(id);
    const values = Object.values(companyObj);
    return values.slice(0, 5);
  };

  const extractStepsArr = (id) => {
    const company = extractCompany(id);
    const { fasi } = company;
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
      <div className={styles["logo-container"]}>
        <img src={logoCmpny} alt="Logo-BDO" className={styles.logo} />
        <span className={styles["company-title"]}>
          Granarolo - Formazione 231
        </span>
      </div>
      <ul className={styles["table-header"]}>
        {tableHeaderCompany.map((item, i) => {
          return (
            <ItemHeaderTable key={i} text={item} size={setStylesCompany[i]} />
          );
        })}
      </ul>
      <RowsTableCopy
        rows={extractValues(hardcodedId)}
        sendStyles={setStylesCompany}
      />

      <div className={styles["steps-container"]}>
        <div className="steps">
          <p className={styles["step-title"]}>Fasi</p>
        </div>

        <ListSteps
          headerText={tableHeaderFasi}
          headerStyles={setStylesFasi}
          stepsArr={extractStepsArr(hardcodedId)}
          rowsStyles={setStylesFasi}
        />

        <EditStep stepName={hardCodedStep} />
      </div>
    </React.Fragment>
  );
};

export default EditCompany;
