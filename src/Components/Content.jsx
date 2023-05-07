import React, { useState, useEffect } from "react";
import styles from "./Content.module.css";
import ListCompany from "./ListCompany";
import EditCompany from "./EditCompany";
import companies from "../DATA/aziende.json";
import UpdateContext from "../Store/update-context";
import axios from "axios";
//import MessageModal from "./Modals/MessageModal";

const companyHeaderTexts = [
  "ID",
  "Nome Azienda",
  "Descrizione",
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

const Content = () => {
  const [IsVisible, setIsVisible] = useState(false);
  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/aziende").then((response) => {
      setReceivedData(response.data);
    });
  }, []);

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
  };

  const updateSteps = (stepObj) => {
    selectedCompany.fasi[stepObj.id] = { ...stepObj };
  };

  const editCompany = (companyObj) => {
    selectedCompany = { ...companyObj };
    handleVisibility();
  };

  const findSelectedCompany = (companyId) => {
    return companies.find((company) => company.idAzienda === companyId);
  };

  const handleVisibility = () => {
    setIsVisible(!IsVisible);
  };

  return (
    <UpdateContext.Provider
      value={{ updateSteps: updateSteps, handleCompany: updateCompanyArr }}
    >
      <section className={styles.section}>
        <div className={styles.content}>
          {!IsVisible && (
            <ListCompany
              headerText={companyHeaderTexts}
              sizeArr={companyStylesArr}
              companies={receivedData}
              onUpdate={editCompany}
            />
          )}
          {IsVisible && (
            <EditCompany
              headerText={companyHeaderTexts}
              sizeArr={companyStylesArr}
              myCompany={selectedCompany}
              btnAction={handleVisibility}
            />
          )}
        </div>
      </section>
    </UpdateContext.Provider>
  );
};

export default Content;
