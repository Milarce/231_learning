import React from "react";
import styles from "./CompanyLogo.module.css";

const CompanyLogo = (props) => {
  return (
    <div className={styles["logo-container"]}>
      <img src={props.logoPath} alt="Logo-Azienda" className={styles.logo} />
      <span className={styles["company-title"]}>{props.companyName}</span>
    </div>
  );
};

export default CompanyLogo;
