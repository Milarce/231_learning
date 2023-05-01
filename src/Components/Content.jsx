import React, { useState } from "react";
import styles from "./Content.module.css";
import ListCompany from "./ListCompany";
import EditCompany from "./EditCompany";
import companies from "../DATA/aziende.json";
//import MessageModal from "./Modals/MessageModal";

const companyHeaderTexts = [
  "ID",
  "Nome Azienda",
  "Questionario",
  "Documentazione",
  "Logo",
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

  const updateCompanyArr = (companyObj) => {
    if (findSelectedCompany(companyObj.idAzienda)) {
      const cmpnyIndex = companies.indexOf(
        findSelectedCompany(companyObj.idAzienda)
      );
      companies[cmpnyIndex] = { ...companyObj };
      console.log(companies[cmpnyIndex]);
    } else {
      selectedCompany = { ...companyObj };
      companies.push(selectedCompany);
    }
    handleVisibility();
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
    <section className={styles.section}>
      <div className={styles.content}>
        {!IsVisible && (
          <ListCompany
            headerText={companyHeaderTexts}
            sizeArr={companyStylesArr}
            companies={companies}
            onCreate={updateCompanyArr}
            onUpdate={editCompany}
          />
        )}
        {IsVisible && (
          <EditCompany
            headerText={companyHeaderTexts}
            sizeArr={companyStylesArr}
            myCompany={selectedCompany}
            btnAction={handleVisibility}
            updateSteps={updateSteps}
            onCreate={updateCompanyArr}
          />
        )}
      </div>
    </section>
  );
};

export default Content;
