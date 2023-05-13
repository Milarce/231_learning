import React, { useState, useEffect } from "react";
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
import axios from "axios";

const EditCompany = (props) => {
  const tableHeaderFasi = ["Id", "Descrizione", "Modifica"];
  const setStylesFasi = ["one-size", "seven-size", "one-size"];

  const [IsVisible, setIsVisible] = useState(false);
  const [StepsArr, setStepsArr] = useState([]);

  useEffect(() => {
    getStepsData();
  }, []);

  const getStepsData = async () => {
    try {
      const getSteps = await axios.get(
        "http://localhost:3001/questionari-fasi"
      );
      setStepsArr(getSteps.data);
    } catch (err) {
      console.error(new Error(err));
    }
  };

  const showUpdateWindow = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const extractValues = (companyObj) => {
    const date = new Date(companyObj.createdAt); //La fecha leida del DB viene como STRING
    const formatDate = new Intl.DateTimeFormat(navigator.language).format(date);
    const values = [
      companyObj.IdAzienda,
      companyObj.DesAzienda,
      props.mySurvey.DesQuestionario,
      companyObj.IdGruppoAzienda,
      formatDate,
    ];

    return [
      ...values,
      <button className="btn" onClick={showUpdateWindow}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>,
    ];
  };

  const extractSteps = (companyObj) => {
    return StepsArr.filter((step) => step.IdAzienda === companyObj.IdAzienda);
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
          rowsStyles={setStylesFasi}
          companyFasi={extractSteps(props.myCompany)}
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
          surveyName={props.mySurvey.DesQuestionario}
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
