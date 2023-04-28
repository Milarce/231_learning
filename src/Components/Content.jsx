import React, { useState } from "react";
import styles from "./Content.module.css";
import ListCompany from "./ListCompany";
//import CreateCompany from "./CreateCompany";
import EditCompany from "./EditCompany";
import companies from "../DATA/aziende.json";
//import EditStep from "./EditStep";
//import MessageModal from "./Modals/MessageModal";

const companyHeaderTexts = [
  "ID",
  "Nome Azienda",
  "Questionario",
  "Documentazione",
  "Logo",
];

const companyStylesArr = [
  "one-size",
  "four-size",
  "seven-size",
  "two-size",
  "two-size",
];

let selectedCompany;

const Content = () => {
  const [IsVisible, setIsVisible] = useState(false);
  //const [CompanyArr, setCompanyArr] = useState(companies);

  const createNewCompany = (newCompany) => {
    const company = { ...newCompany, fasi: [...companies.at(-1).fasi] };
    companies.push(company);
    selectedCompany = modifySelectedCompany(company.idAzienda);

    handleVisibility();
  };

  const updateCompany = (stepObj) => {
    //---NO SE ESCOGE ASI LA AZIENDA---
    selectedCompany.fasi[stepObj.id] = { ...stepObj };
    console.log(companies);
  };

  const modifySelectedCompany = (companyId) => {
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
            onCreate={createNewCompany}
          />
        )}
        {IsVisible && (
          <EditCompany
            headerText={companyHeaderTexts}
            sizeArr={companyStylesArr}
            myCompany={selectedCompany}
            btnAction={handleVisibility}
            updateCompany={updateCompany}
          />
        )}
      </div>
    </section>
  );
};

export default Content;

/*
<EditStep stepName={hardCodedStep} />

<CreateCompany
headers={companyHeaderTexts}
sizeArr={companyStylesArr}
/>
<MessageModal
title={"Error!"}
msgText={"Upsss! Something went wrong"}
/>
*/

/*
const extractCompanyDetails = (companiesArr) => {
  const detailsArr = companiesArr.map((cmpy) => {
    const values = Object.values(cmpy);
    return values.slice(0, 5);
  });
  return detailsArr;
};
*/
