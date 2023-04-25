import React, { useState } from "react";
import styles from "./ListCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import Button from "./Miscellany/Button";
import CompanyLogo from "./Miscellany/CompanyLogo";
import logoLearning from "../img/logo/logo_231/231-logo-color.png";
import CreateCompany from "./CreateCompany";

const ListCompany = (props) => {
  const [IsVisible, setIsVisible] = useState(false);

  const showCompanyWindow = () => {
    setIsVisible(() => !IsVisible);
  };

  const extractCompanyDetails = (companiesArr) => {
    const detailsArr = companiesArr.map((cmpy) => {
      const values = Object.values(cmpy);
      return values.slice(0, 5);
    });
    return detailsArr;
  };

  return (
    <React.Fragment>
      <CompanyLogo logoPath={logoLearning} companyName={"Le tue aziende"} />
      <HeaderTable rows={props.headerText} sendStyles={props.sizeArr} />
      {extractCompanyDetails(props.companies).map((company, i) => {
        return <RowsTable key={i} rows={company} sendStyles={props.sizeArr} />;
      })}
      <footer className={`${styles.table} ${styles["btn-container"]}`}>
        <Button
          btnType={"submit"}
          btnText={"Crea Azienda"}
          btnStyle={"create"}
          btnAction={showCompanyWindow}
        />
      </footer>
      {IsVisible && (
        <CreateCompany
          headers={props.headerText}
          onClose={showCompanyWindow}
          newId={+props.companies.at(-1).idAzienda + 1}
          onCreate={props.onCreate}
        />
      )}
    </React.Fragment>
  );
};

export default ListCompany;
