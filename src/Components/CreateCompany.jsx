import React, { ChangeEvent, useState, useRef } from "react";
import styles from "./CreateCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import CompanyLogo from "./Miscellany/CompanyLogo";
import companies from "../DATA/aziende.json";
import Button from "./Miscellany/Button";
import logoLearning from "../img/logo/logo_231/231-logo-color.png";

const newId = +companies.at(-1).idAzienda + 1;
//<button onClick={handleUploadClick}>Upload</button>

const CreateCompany = (props) => {
  const [docFile, setDocFile] = useState();
  const [imgFile, setImgFile] = useState();
  const companyNameRef = useRef();
  const questionsNameRef = useRef();

  const handleFileChange = (e) => {
    if (e.target.files) {
      setDocFile(e.target.files[0]);
    }
  };

  const handleImgChange = (e) => {
    if (e.target.files) {
      setImgFile(e.target.files[0]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(companyNameRef.current.value);
  };

  const handleUploadClick = () => {
    if (!docFile) {
      return;
    }
  };

  return (
    <React.Fragment>
      <CompanyLogo logoPath={logoLearning} companyName={"Crea nuova azienda"} />
      <HeaderTable rows={props.headerText} sendStyles={props.sizeArr} />

      <form className={styles.table}>
        <li className={`${styles.list} ${styles.item} ${styles.first}`}>
          <span>{newId}</span>
        </li>
        <input
          className={`${styles.list} ${styles.item} ${styles.scnd} `}
          name="companyName"
          type="text"
          maxLength={50}
          placeholder="Azienda - Formazione 231 (anno)"
          ref={companyNameRef}
        />

        <input
          className={`${styles.list} ${styles.item} ${styles.third} `}
          name="questionsName"
          type="text"
          maxLength={255}
          ref={questionsNameRef}
        />
        <input
          className={styles.upload}
          id="upload-doc"
          type="file"
          onChange={handleFileChange}
        />
        <label
          className={`${styles.list} ${styles.item} ${styles.fourth} ${
            docFile ? styles.blacking : ""
          }`}
          htmlFor="upload-doc"
        >
          {docFile ? docFile.name : "Scegli document"}
        </label>
        <input
          className={styles.upload}
          id="upload-img"
          type="file"
          onChange={handleImgChange}
        />
        <label
          className={`${styles.list} ${styles.item} ${styles.fifth} ${
            imgFile ? styles.blacking : ""
          }`}
          htmlFor="upload-img"
        >
          {imgFile ? imgFile.name : "Scegli logo"}
        </label>
      </form>
      <div className={`${styles.table} ${styles["btn-container"]}`}>
        <Button btnType={"button"} text={"Indietro"} btnStyle={"back"} />
        <Button btnType={"submit"} text={"Crea"} btnStyle={"create"} />
      </div>
    </React.Fragment>
  );
};

export default CreateCompany;
