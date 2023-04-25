import React, { useRef } from "react";
import styles from "./EditStep.module.css";
import ItemHeaderTable from "./Table/ItemHeaderTable";
import FormModal from "./Modals/FormModal";
import ItemRowsTable from "./Table/ItemRowsTable";

const EditStep = (props) => {
  const mailNumber = useRef();
  const daysNumber = useRef();
  const bodyMail = useRef();
  const bodyPage = useRef();

  const validation = () => {
    return (
      mailNumber.current.value &&
      daysNumber.current.value &&
      bodyMail.current.value &&
      bodyPage.current.value &&
      true
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validation()) {
      alert("Tutti campi sono obbligatori");
    } else {
      const stepObj = {
        noSolleciti: mailNumber.current.value,
        giorniSollecito: daysNumber.current.value,
        bodyMail: bodyMail.current.value,
        bodyPage: bodyPage.current.value,
      };
      props.onClose();
      return props.onModify(stepObj);
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
                <span>{props.stepName}</span>
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
                  placeholder="0"
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
                  placeholder="0"
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
