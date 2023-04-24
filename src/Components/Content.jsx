import React from "react";
import styles from "./Content.module.css";
import ListCompany from "./ListCompany";
import CreateCompany from "./CreateCompany";
import EditCompany from "./EditCompany";
import companies from "../DATA/aziende.json";
import EditStep from "./EditStep";
import MessageModal from "./Modals/MessageModal";

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

const hardCodedStep = ["Mail invito scarico documentazione"];

const IsVisibile = false;

const Content = () => {
  const extractCompanyDetails = (companiesArr) => {
    const detailsArr = companiesArr.map((cmpy) => {
      const values = Object.values(cmpy);
      return values.slice(0, 5);
    });
    return detailsArr;
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <ListCompany
          headerText={companyHeaderTexts}
          sizeArr={companyStylesArr}
          companiesDetails={extractCompanyDetails(companies)}
        />
        <EditCompany
          headerText={companyHeaderTexts}
          sizeArr={companyStylesArr}
        />
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
