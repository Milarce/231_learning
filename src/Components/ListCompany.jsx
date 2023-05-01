import React, { useState } from "react";
import styles from "./ListCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import Button from "./Miscellany/Button";
import CompanyLogo from "./Miscellany/CompanyLogo";
import logoLearning from "../img/logo/logo_231/231-logo-color.png";
import CreateCompany from "./CreateCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ListCompany = (props) => {
  const [IsVisible, setIsVisible] = useState(false);

  const showCreateWindow = () => {
    setIsVisible(() => !IsVisible);
  };

  const modifySelectedCompany = (e) => {
    const selCompanyId = e.target.closest(".btn").id;
    const selCompany = props.companies[selCompanyId];
    props.onUpdate(selCompany);
  };

  const extractCompanyDetails = (companiesArr) => {
    const detailsArr = companiesArr.map((cmpy, i) => {
      const values = Object.values(cmpy);
      return [
        ...values.slice(0, 5),
        <button id={i} className="btn" onClick={modifySelectedCompany}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>,
      ];
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
          btnAction={showCreateWindow}
        />
      </footer>
      {IsVisible && (
        <CreateCompany
          headers={props.headerText}
          onClose={showCreateWindow}
          companyData={{
            idAzienda: +props.companies.at(-1).idAzienda + 1, //Takes last id and adds 1 to set the new id
            fasi: props.companies.at(-1).fasi, //Takes the last company steps to the new company
          }}
          onCreate={props.onCreate}
          windowsType={{
            headerText: "Crea nuova azienda",
            btnText: "Crea",
          }}
        />
      )}
    </React.Fragment>
  );
};

export default ListCompany;
