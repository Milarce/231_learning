import React, { ChangeEvent, useState } from "react";
import styles from "./CreateCompany.module.css";
import HeaderTable from "./Miscellany/HeaderTable";
import companies from "../DATA/aziende.json";
import Button from "./Miscellany/Button";

const newId = +companies.at(-1).idAzienda + 1;
//<button onClick={handleUploadClick}>Upload</button>

const CreateCompany = () => {
  const [docFile, setDocFile] = useState();
  const [imgFile, setImgFile] = useState();

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

  const handleUploadClick = () => {
    if (!docFile) {
      return;
    }
  };

  return (
    <React.Fragment>
      <div className={styles["create-header"]}>
        <p>Creazione nuova azienda</p>
      </div>
      <HeaderTable />

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
        />

        <input
          className={`${styles.list} ${styles.item} ${styles.third} `}
          name="questionsName"
          type="text"
          maxLength={255}
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
