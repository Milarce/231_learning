import React from "react";
import styles from "./EditStep.module.css";
import ItemHeaderTable from "./Table/ItemHeaderTable";
import FormModal from "./Modals/FormModal";
import ItemRowsTable from "./Table/ItemRowsTable";

const EditStep = (props) => {
  const getForwardMail = () => {};
  const getForwardDays = () => {};
  const getBodyMail = () => {};
  const getBodyPage = () => {};

  return (
    <React.Fragment>
      <div className={styles.backdrop} />
      <div className={styles.overlay}>
        <FormModal
          headerText={"Modifica fase"}
          btnText={"Modifica"}
          headerType={"create-header"}
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
                  ref={getForwardMail}
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
                  ref={getForwardDays}
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
                  ref={getBodyMail}
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
                  ref={getBodyPage}
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
