import React, { useState, useEffect } from "react";
import styles from "./Content.module.css";
import ListCompany from "./ListCompany";
import EditCompany from "./EditCompany";
//import companies from "../DATA/aziende.json";
import UpdateContext from "../Store/update-context";
import axios from "axios";
//import MessageModal from "./Modals/MessageModal";

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

let selectedCompany;
let selectedSteps;
let selectedSurvey;

const Content = () => {
  const [IsVisible, setIsVisible] = useState(false);
  const [CompanyData, setCompanyData] = useState([]);
  const [DesQuestionariArr, setDesQuestionariArr] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const getCompanies = axios.get("http://localhost:3001/aziende");
      const getQuestionari = axios.get("http://localhost:3001/questionari");

      const dataResp = await Promise.all([getCompanies, getQuestionari]);
      console.log(dataResp);
      setCompanyData(dataResp[0].data);
      setDesQuestionariArr(dataResp[1].data);
    } catch (err) {
      console.error(new Error(err));
    }
  };

  /* 
  const updateCompanyArr = (companyObj) => {
    if (findSelectedCompany(companyObj.idAzienda)) {
      const cmpnyIndex = companies.indexOf(
        findSelectedCompany(companyObj.idAzienda)
      );
      companies[cmpnyIndex] = { ...companyObj };
      setIsVisible((prevIsVisible) => !prevIsVisible);
      console.log(companies[cmpnyIndex]);
    } else {
      selectedCompany = { ...companyObj };
      companies.push(selectedCompany);
      handleVisibility();
    }
  }; */

  const updateSteps = (stepObj) => {
    selectedCompany.fasi[stepObj.id] = { ...stepObj };
  };

  const editCompany = (companyObj, surveyObject) => {
    selectedCompany = { ...companyObj };
    selectedSurvey = { ...surveyObject };
    axios.get("http://localhost:3001/questionari-fasi").then((response) => {
      const fasi = response.data.filter((item) => {
        return item.IdAzienda === companyObj.IdAzienda;
      });
      selectedSteps = [...fasi];
      handleVisibility();
    });
  };

  /* const findSelectedCompany = (companyId) => {
    return companies.find((company) => company.idAzienda === companyId);
  }; */

  const handleVisibility = () => {
    setIsVisible(!IsVisible);
  };

  return (
    <UpdateContext.Provider
      value={{
        updateSteps: updateSteps,
        //handleCompany: updateCompanyArr,
        stepsArr: selectedSteps,
      }}
    >
      <section className={styles.section}>
        <div className={styles.content}>
          {!IsVisible && (
            <ListCompany
              headerText={companyHeaderTexts}
              sizeArr={companyStylesArr}
              companies={CompanyData}
              DesQuestionariArr={DesQuestionariArr}
              onSelected={editCompany}
            />
          )}
          {IsVisible && (
            <EditCompany
              headerText={companyHeaderTexts}
              sizeArr={companyStylesArr}
              myCompany={selectedCompany}
              mySurvey={selectedSurvey}
              btnAction={handleVisibility}
            />
          )}
        </div>
      </section>
    </UpdateContext.Provider>
  );
};

export default Content;
