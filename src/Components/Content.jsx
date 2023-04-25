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

const Content = () => {
  const [IsVisible, setIsVisible] = useState(false);
  const [CompanyArr, setCompanyArr] = useState(companies);

  const createNewCompany = (newCompany) => {
    setCompanyArr((prevState) => {
      return [...prevState, newCompany];
    });
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
            companies={CompanyArr}
            onCreate={createNewCompany}
          />
        )}
        {!IsVisible && (
          <EditCompany
            headerText={companyHeaderTexts}
            sizeArr={companyStylesArr}
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
