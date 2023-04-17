import React from "react";
import styles from "./EditCompany.module.css";
import logoCmpny from "../img/logo/logo_granarolo.jpg";
import companies from "../DATA/aziende.json";
import ItemHeaderTable from "./Table/ItemHeaderTable";
import RowsTable from "./Table/RowsTable";

const EditCompany = (props) => {
  const tableHeader = ["Id", "Descrizione", "Modifica"];
  const setStyles = ["one-size", "seven-size", "one-size"];
  const hardcodedId = "31190";

  const renderSteps = () => {
    const selectedCompany = companies.find(
      (company) => company.idAzienda === hardcodedId
    );
    selectedCompany.fasi.map((step, i) => {
      return <RowsTable key={i} data={company} />;
    });
  };

  return (
    <div className={styles["edit-container"]}>
      <div className={styles["logo-container"]}>
        <img src={logoCmpny} alt="Logo-BDO" className={styles.logo} />
        <span className={styles["company-title"]}>
          Granarolo - Formazione 231
        </span>
      </div>
      <div className="steps">
        <p className={styles["step-title"]}>Fasi</p>
        <ul className={styles["table-header"]}>
          {tableHeader.map((item, i) => {
            return <ItemHeaderTable key={i} text={item} size={setStyles[i]} />;
          })}
        </ul>
        {}
      </div>
    </div>
  );
};

export default EditCompany;
