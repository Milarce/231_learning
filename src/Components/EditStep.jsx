import React, { useRef, useContext } from "react";
import styles from "./EditStep.module.css";
import ItemHeaderTable from "./Table/ItemHeaderTable";
import FormModal from "./Modals/FormModal";
import ItemRowsTable from "./Table/ItemRowsTable";
import UpdateContext from "../Store/update-context";
import axios from "axios";

const EditStep = (props) => {
  //const ctx = useContext(UpdateContext);

  const mailNumber = useRef();
  const daysNumber = useRef();
  const bodyMail = useRef();
  const bodyPage = useRef();
  const descrizione = useRef();

  const validation = () => {
    return (
      mailNumber.current.value &&
      daysNumber.current.value &&
      bodyMail.current.value &&
      bodyPage.current.value &&
      true
    );
  };

  const editStep = async (stepObj) => {
    try {
      axios.post("http://localhost:3001/questionari-fasi/update", stepObj);

      console.log("FASE SUCCESSFULLY MODIFIED");
      props.updateView(stepObj);
    } catch (err) {
      console.error(new Error(err));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validation()) {
      alert("Tutti campi sono obbligatori");
    } else {
      const stepObj = {
        IdAzienda: props.stepName.IdAzienda,
        IdQuestionario: props.stepName.IdQuestionario,
        NumFase: props.stepName.NumFase,
        DesFase: descrizione.current.value,
        NumGiorniSollecito: daysNumber.current.value,
        NumSolleciti: mailNumber.current.value,
        DesBodyEmail: bodyMail.current.value,
        DesBodyPagina: bodyPage.current.value,
        TipoFase: props.stepName.TipoFase,
      };
      editStep(stepObj);
      //props.onClose();
    }
  };

  return (
    <React.Fragment>
      <div className={styles.backdrop} />
      <div className={styles.overlay}>
        <FormModal
          headerText={"Modifica fase"}
          btnText={"Modifica"}
          headerType={"create-header"}
          onClose={props.onClose}
          onSubmit={submitHandler}
        >
          <div className={styles["grid-container"]}>
            <div className={styles["el--1"]}>
              <ItemHeaderTable text={"Fase"} size={["one-size"]} />
            </div>
            <div className={styles["el--2"]}>
              <ItemRowsTable size={"normal"}>
                <input
                  className={styles["el--rows"]}
                  name="forward"
                  type="text"
                  defaultValue={props.stepName.DesFase}
                  ref={descrizione}
                />
              </ItemRowsTable>
            </div>
            <div className={styles["el--3"]}>
              <ItemHeaderTable text={"Numero Solleciti"} size={"one-size"} />
            </div>
            <div className={styles["el--4"]}>
              <ItemRowsTable size={"normal"}>
                <input
                  className={styles["el--rows"]}
                  name="forward"
                  type="number"
                  defaultValue={props.stepName.NumSolleciti}
                  ref={mailNumber}
                />
              </ItemRowsTable>
            </div>
            <div className={styles["el--5"]}>
              <ItemHeaderTable text={"Giorni"} size={"two-size"} />
            </div>
            <div className={styles["el--6"]}>
              <ItemRowsTable size={"normal"}>
                <input
                  className={styles["el--rows"]}
                  name="days"
                  type="number"
                  defaultValue={props.stepName.NumGiorniSollecito}
                  ref={daysNumber}
                />
              </ItemRowsTable>
            </div>
            <div className={`${styles["el--7"]} ${styles["el--header"]}`}>
              <ItemHeaderTable text={"Body Mail"} size={"two-size"} />
            </div>
            <div className={styles["el--8"]}>
              <ItemRowsTable size={"large"}>
                <textarea
                  className={styles["el--rows"]}
                  name="body-mail"
                  defaultValue={props.stepName.DesBodyEmail}
                  ref={bodyMail}
                ></textarea>
              </ItemRowsTable>
            </div>

            <div className={`${styles["el--9"]} ${styles["el--header"]}`}>
              <ItemHeaderTable text={"Body pagina"} size={"two-size"} />
            </div>
            <div className={styles["el--10"]}>
              <ItemRowsTable size={"large"}>
                <textarea
                  className={styles["el--rows"]}
                  name="body-pagina"
                  defaultValue={props.stepName.DesBodyPagina}
                  ref={bodyPage}
                ></textarea>
              </ItemRowsTable>
            </div>
          </div>
        </FormModal>
      </div>
    </React.Fragment>
  );
};

export default EditStep;
