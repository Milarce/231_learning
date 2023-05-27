import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./ListCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import Button from "./Miscellany/Button";
import CompanyLogo from "./Miscellany/CompanyLogo";
import logoLearning from "../img/logo/logo_231/231-logo-color.png";
import CreateCompany from "./CreateCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
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

const ListCompany = (props) => {
  const [IsVisible, setIsVisible] = useState(false);
  const [companyData, setCompanyData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  //const companyData = useLoaderData();

  useEffect(() => {
    validateUser().then((resp) => {
      resp.loggedIn ? getData() : navigate("/login");
    });
  }, [IsVisible]); //Ejecuta useEffect cada vez que cambia "IsVisible"

  const getData = async () => {
    try {
      const getCompanies = await axios.get("http://localhost:3001/aziende", {
        headers: {
          "my-access-token": localStorage.getItem("token"),
        },
      });
      ////const dataResp = await Promise.all([getCompanies, getQuestionari]);
      //setCompanyData(dataResp);
      setCompanyData(getCompanies.data);
      setLoading(false);
    } catch (err) {
      console.error(new Error(err));
    }
  };

  const showCreateWindow = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const modifySelectedCompany = (e) => {
    const selCompanyId = e.target.closest(".btn").id;
    const cmpnyId = companyData[selCompanyId].IdAzienda;
    navigate(`/list-company/${cmpnyId}`);
  };

  const extractCompanyDetails = (companiesArr) => {
    const detailsArr = companiesArr.map((cmpy, i) => {
      const date = new Date(cmpy.createdAt); //La fecha leida del DB viene como STRING

      const formatDate = new Intl.DateTimeFormat(navigator.language).format(
        date
      );
      const values = [
        cmpy.IdAzienda,
        cmpy.DesAzienda,
        cmpy.DesQuestionario,
        cmpy.IdGruppoAzienda,
        formatDate,
      ];
      return [
        ...values,
        <button id={i} className="btn" onClick={modifySelectedCompany}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>,
      ];
    });
    return detailsArr;
  };

  return (
    <section className={styles.section}>
      {Loading ? (
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
          <CompanyLogo logoPath={logoLearning} companyName={"Le tue aziende"} />
          <HeaderTable
            rows={companyHeaderTexts}
            sendStyles={companyStylesArr}
          />
          {extractCompanyDetails(companyData).map((company, i) => {
            return (
              <RowsTable key={i} rows={company} sendStyles={companyStylesArr} />
            );
          })}
          <footer className={`${styles.table} ${styles["btn-container"]}`}>
            <Button
              btnType={"submit"}
              btnStyle={"create"}
              btnAction={showCreateWindow}
            >
              Crea Azienda
            </Button>
          </footer>
          {IsVisible && (
            <CreateCompany
              headers={companyHeaderTexts}
              onClose={showCreateWindow}
              windowsType={{
                headerText: "Crea nuova azienda",
                btnText: "Crea",
              }}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default ListCompany;

/* export const listCompanyLoader = async () => {
  try {
    //validateUser();
    const getCompanies = axios.get("http://localhost:3001/aziende");
    const getQuestionari = axios.get("http://localhost:3001/questionari");

    const dataResp = await Promise.all([getCompanies, getQuestionari]);

    return dataResp;
  } catch (err) {
    console.error(new Error(err));
  }
};
 */
