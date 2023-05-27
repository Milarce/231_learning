import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { PulseLoader } from "react-spinners";
import { validateUser } from "../validation/ValidateUser";

const companyHeaderTexts = [
  "ID",
  "Nome Azienda",
  "Intervento Formativo",
  "Documentazione",
  "Creato",
  "Modifica",
];

const companyStylesArr = [
  "one-size",
  "four-size",
  "seven-size",
  "two-size",
  "two-size",
  "one-size",
];

const EditCompany = (props) => {
  let { idAzienda } = useParams();
  let navigate = useNavigate();
  const tableHeaderFasi = ["Id", "Descrizione", "Modifica"];
  const setStylesFasi = ["one-size", "seven-size", "one-size"];

  const [IsVisible, setIsVisible] = useState(false);
  const [CompanyData, setCompanyData] = useState([]);
  const [Load, setLoad] = useState(true); //Shows-Hide the spinner

  useEffect(() => {
    validateUser().then((resp) => {
      resp.loggedIn ? getCompanyData() : navigate("/login");
    });
  }, [IsVisible]);

  const getCompanyData = async () => {
    try {
      const getCompany = axios.get(
        `http://localhost:3001/aziende/${idAzienda}`
      );
      const getQuestionario = axios.get(
        `http://localhost:3001/questionari/${idAzienda}`
      );
      const getSteps = axios.get(
        `http://localhost:3001/questionari-fasi/${idAzienda}`
      );

      const dataResp = await Promise.all([
        getCompany,
        getQuestionario,
        getSteps,
      ]);
      setCompanyData(dataResp);
      setLoad(false);
    } catch (err) {
      console.error(new Error(err));
    }
  };

  const showUpdateWindow = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const goBack = () => {
    navigate("/list-company");
  };

  const extractValues = (companyObj) => {
    const date = new Date(companyObj[0].data.createdAt); //La fecha leida del DB viene como STRING
    const formatDate = new Intl.DateTimeFormat(navigator.language).format(date);
    const values = [
      companyObj[0].data.IdAzienda,
      companyObj[0].data.DesAzienda,
      companyObj[1].data.DesQuestionario,
      companyObj[0].data.IdGruppoAzienda,
      formatDate,
    ];

    return [
      ...values,
      <button className="btn" onClick={showUpdateWindow}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>,
    ];
  };

  return (
    <section className={styles.section}>
      {Load ? (
        <PulseLoader
          color={"#ed1a3b"}
          loading={true}
          size={"3rem"}
          cssOverride={{ marginTop: "45vh", textAlign: "center" }}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <CompanyLogo
            logoPath={logoCmpny}
            companyName={CompanyData[0].data.DesAzienda}
          />
          <HeaderTable
            rows={companyHeaderTexts}
            sendStyles={companyStylesArr}
          />

          <RowsTable
            rows={extractValues(CompanyData)}
            sendStyles={companyStylesArr}
          />

          <div className={styles["steps-container"]}>
            <div className="steps">
              <p className={styles["step-title"]}>Fasi</p>
            </div>

            <ListSteps
              headerText={tableHeaderFasi}
              headerStyles={setStylesFasi}
              rowsStyles={setStylesFasi}
              companyFasi={CompanyData[2].data}
            />
          </div>
          <footer className={`${styles.table} ${styles["btn-container"]}`}>
            <Button btnType={"button"} btnAction={goBack} btnStyle={"create"}>
              Fatto
            </Button>
          </footer>
          {IsVisible && (
            <CreateCompany
              headers={companyHeaderTexts}
              onClose={showUpdateWindow}
              companyData={CompanyData[0].data}
              surveyName={CompanyData[1].data}
              windowsType={{
                headerText: "Modifica azienda",
                btnText: "Fatto",
              }}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default EditCompany;
