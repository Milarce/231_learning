import React, { ChangeEvent, useState, useRef } from "react";
import styles from "./CreateCompany.module.css";
import companies from "../DATA/aziende.json";
import ItemHeaderTable from "./Table/ItemHeaderTable";
import ItemRowsTable from "./Table/ItemRowsTable";
import FormModal from "./Modals/FormModal";
import MessageModal from "./Modals/MessageModal";

const CreateCompany = (props) => {
  const [docFile, setDocFile] = useState();
  const [imgFile, setImgFile] = useState();
  const companyNameRef = useRef();
  const questionsNameRef = useRef();

  const validation = () => {
    return (
      companyNameRef.current.value &&
      questionsNameRef.current.value &&
      docFile &&
      imgFile &&
      true
    );
  };

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
    if (!validation()) {
      alert("Tutti campi sono obbligatori");
    } else {
      const tmpObj = {
        idAzienda: props.newId,
        desAzienda: companyNameRef.current.value,
        DesQuestionario: questionsNameRef.current.value,
        Documentation: docFile.name,
        Images: imgFile.name,
        MailMittente: "<learning@231workstation.com>",
        fasi: [],
      };
      props.onClose();
      return props.onCreate(tmpObj);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.backdrop} />
      <div className={styles.overlay}>
        <FormModal
          headerText={"Crea nuova azienda"}
          btnText={"Crea"}
          headerType={"create-header"}
          onClose={props.onClose}
          onSubmit={submitHandler}
        >
          <form className={styles["grid-container"]} onSubmit={submitHandler}>
            <div className={styles["el--1"]}>
              <ItemHeaderTable text={props.headers[0]} size={["one-size"]} />
            </div>
            <div className={styles["el--2"]}>
              <ItemRowsTable size={"normal"}>
                <span>{props.newId}</span>
              </ItemRowsTable>
            </div>
            <div className={styles["el--3"]}>
              <ItemHeaderTable text={props.headers[1]} size={"one-size"} />
            </div>
            <div className={styles["el--4"]}>
              <ItemRowsTable size={"normal"}>
                <input
                  className={styles["el--rows"]}
                  name="companyName"
                  type="text"
                  maxLength={50}
                  placeholder="Azienda - Formazione 231 (anno)"
                  ref={companyNameRef}
                />
              </ItemRowsTable>
            </div>
            <div className={`${styles["el--5"]} ${styles["el--header"]}`}>
              <ItemHeaderTable text={props.headers[4]} size={"two-size"} />
            </div>
            <div className={styles["el--6"]}>
              <ItemRowsTable size={"normal"}>
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
              </ItemRowsTable>
            </div>
            <div className={`${styles["el--7"]} ${styles["el--header"]}`}>
              <ItemHeaderTable text={props.headers[3]} size={"two-size"} />
            </div>
            <div className={styles["el--8"]}>
              <ItemRowsTable size={"normal"}>
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
              </ItemRowsTable>
            </div>
            <div className={`${styles["el--9"]} ${styles["el--header"]}`}>
              <ItemHeaderTable text={props.headers[2]} size={"two-size"} />
            </div>
            <div className={styles["el--10"]}>
              <ItemRowsTable size={"normal"}>
                <input
                  className={styles["el--rows"]}
                  name="questionsName"
                  type="text"
                  maxLength={150}
                  ref={questionsNameRef}
                />
              </ItemRowsTable>
            </div>
          </form>
        </FormModal>
      </div>
    </React.Fragment>
  );
};

export default CreateCompany;
