import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateCompany.module.css";
import ItemHeaderTable from "./Table/ItemHeaderTable";
import ItemRowsTable from "./Table/ItemRowsTable";
import FormModal from "./Modals/FormModal";
import { PulseLoader } from "react-spinners";
//import UpdateContext from "../Store/update-context";
import axios from "axios";
//import MessageModal from "./Modals/MessageModal";
import { validateUser } from "../validation/ValidateUser";

const CreateCompany = (props) => {
  const [lastCompany, setLastCompany] = useState();
  const [Loading, setLoading] = useState(true);
  const [docFile, setDocFile] = useState();
  const [imgFile, setImgFile] = useState();
  const companyNameRef = useRef();
  const questionsNameRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    //Se decide si la ventana fue abierta desde "Crea Azienda" o desde "Edita Azienda"
    props.companyData ? setLoading(false) : getLastCompany();
  }, []);

  const getLastCompany = async () => {
    try {
      const allCompanies = await axios.get("http://localhost:3001/aziende/all");
      const lastId = allCompanies.data.at(-1).IdAzienda + 10;
      setLastCompany(lastId);
      setLoading(false);
    } catch (err) {
      console.error(new Error(err));
    }
  };

  //const ctx = useContext(UpdateContext);
  const setNewCompany = async (dataCmpny, dataQuestion, dataUser) => {
    try {
      const setCompanies = axios.post(
        "http://localhost:3001/aziende",
        dataCmpny
      );
      const setQuestionari = axios.post(
        "http://localhost:3001/questionari",
        dataQuestion
      );
      const setUser = axios.post(
        "http://localhost:3001/utenti-azienda",
        dataUser,
        {
          headers: {
            "my-access-token": localStorage.getItem("token"),
          },
        }
      );

      await Promise.all([setCompanies, setQuestionari, setUser]);
      console.log("COMPANY SUCCESSFULLY CREATED");
    } catch (err) {
      console.error(new Error(err));
    }
  };

  const editCompany = async (dataCmpny, dataQuestion) => {
    try {
      const setCompanies = axios.post(
        "http://localhost:3001/aziende/update",
        dataCmpny
      );
      const setQuestionari = axios.post(
        "http://localhost:3001/questionari/update",
        dataQuestion
      );

      await Promise.all([setCompanies, setQuestionari]);
      console.log("COMPANY SUCCESSFULLY MODIFIED");
    } catch (err) {
      console.error(new Error(err));
    }
  };

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
    validateUser().then((resp) => {
      if (!resp.loggedIn) {
        navigate("/login");
      } else {
        if (!validation()) {
          alert("Tutti campi sono obbligatori");
        } else {
          const companyObj = {
            IdAzienda: props.companyData?.IdAzienda || lastCompany,
            DesAzienda: companyNameRef.current.value,
            PathDoc: companyNameRef.current.value,
            FlgUpdate: 1,
            PcCopiaLocale: "",
            IdGruppoAzienda: 0,
          };
          const questionarioObj = {
            IdAzienda: props.companyData?.IdAzienda || lastCompany,
            IdQuestionario: 1,
            DesQuestionario: questionsNameRef.current.value,
          };
          const userObj = {
            IdAzienda: props.companyData?.IdAzienda || lastCompany,
            FlgQuery: 1,
            FlgUpdate: 1,
          };
          props.companyData
            ? editCompany(companyObj, questionarioObj)
            : setNewCompany(companyObj, questionarioObj, userObj);

          props.onClose();
        }
      }
    });
  };

  return (
    <React.Fragment>
      {Loading ? (
        <PulseLoader
          color={"#ed1a3b"}
          loading={true}
          size={"3rem"}
          cssOverride={{ marginTop: "45vh", textAlign: "center" }}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <div className={styles.backdrop} />
          <div className={styles.overlay}>
            <FormModal
              headerText={props.windowsType.headerText}
              btnText={props.windowsType.btnText}
              headerType={"create-header"}
              onClose={props.onClose}
              onSubmit={submitHandler}
            >
              <form
                className={styles["grid-container"]}
                onSubmit={submitHandler}
              >
                <div className={styles["el--1"]}>
                  <ItemHeaderTable
                    text={props.headers[0]}
                    size={["one-size"]}
                  />
                </div>
                <div className={styles["el--2"]}>
                  <ItemRowsTable size={"normal"}>
                    <span>{props.companyData?.IdAzienda || lastCompany}</span>
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
                      defaultValue={props.companyData?.DesAzienda}
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
                      className={`${styles.list} ${styles.item} ${
                        styles.fifth
                      } ${imgFile ? styles.blacking : ""}`}
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
                      className={`${styles.list} ${styles.item} ${
                        styles.fourth
                      } ${docFile ? styles.blacking : ""}`}
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
                      defaultValue={props.surveyName?.DesQuestionario}
                      ref={questionsNameRef}
                    />
                  </ItemRowsTable>
                </div>
              </form>
            </FormModal>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CreateCompany;
