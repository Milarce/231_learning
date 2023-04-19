import React from "react";
import styles from "./Content.module.css";
import ListCompany from "./ListCompany";
import CreateCompany from "./CreateCompany";
import EditCompany from "./EditCompany";
import companies from "../DATA/aziende.json";

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
        <CreateCompany />
        <EditCompany />
        <ListCompany
          headerText={companyHeaderTexts}
          sizeArr={companyStylesArr}
          companiesDetails={extractCompanyDetails(companies)}
        />
      </div>
    </section>
  );
};

export default Content;
