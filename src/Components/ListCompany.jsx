import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigation, useNavigate } from "react-router-dom";
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
  //const [Loading, setLoading] = useState(false);
  const companyData = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  /* useEffect(() => {
    console.log("UseEffect");
    setLoading(true);
    const counter = setTimeout(() => {
      setLoading(false);
      clearTimeout(counter);
    }, 3000);
  }, []); */

  const showCreateWindow = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const modifySelectedCompany = (e) => {
    const selCompanyId = e.target.closest(".btn").id;
    const cmpnyId = companyData[0].data[selCompanyId].IdAzienda;
    navigate(`/list-company/${cmpnyId}`);
    /*  const selCompany = props.companies[selCompanyId];
    const selQuestionario = props.DesQuestionariArr[selCompanyId];
    props.onSelected(selCompany, selQuestionario); */
  };

  const extractCompanyDetails = (companiesArr) => {
    const [cmpnyList, questionList] = companiesArr;
    const detailsArr = cmpnyList.data.map((cmpy, i) => {
      const date = new Date(cmpy.createdAt); //La fecha leida del DB viene como STRING

      const formatDate = new Intl.DateTimeFormat(navigator.language).format(
        date
      );
      const values = [
        cmpy.IdAzienda,
        cmpy.DesAzienda,
        questionList.data[i].DesQuestionario,
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
      {
        //Loading
        navigation.state === "loading" ? (
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
              logoPath={logoLearning}
              companyName={"Le tue aziende"}
            />
            <HeaderTable
              rows={companyHeaderTexts}
              sendStyles={companyStylesArr}
            />
            {extractCompanyDetails(companyData).map((company, i) => {
              return (
                <RowsTable
                  key={i}
                  rows={company}
                  sendStyles={companyStylesArr}
                />
              );
            })}
            <footer className={`${styles.table} ${styles["btn-container"]}`}>
              <Button
                btnType={"submit"}
                btnText={"Crea Azienda"}
                btnStyle={"create"}
                btnAction={showCreateWindow}
              />
            </footer>
            {IsVisible && (
              <CreateCompany
                headers={companyHeaderTexts}
                onClose={showCreateWindow}
                companyData={{
                  IdAzienda: companyData[0].data.at(-1).IdAzienda + 10, //Takes last id and adds 10 to set the new id
                  //fasi: props.companies.at(-1).fasi, //Takes the last company steps to the new company
                }}
                windowsType={{
                  headerText: "Crea nuova azienda",
                  btnText: "Crea",
                }}
              />
            )}
          </div>
        )
      }
    </section>
  );
};

export default ListCompany;

export const listCompanyLoader = async () => {
  try {
    const getCompanies = axios.get("http://localhost:3001/aziende");
    const getQuestionari = axios.get("http://localhost:3001/questionari");

    const dataResp = await Promise.all([getCompanies, getQuestionari]);
    return dataResp;
  } catch (err) {
    console.error(new Error(err));
  }
};
