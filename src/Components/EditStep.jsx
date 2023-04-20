import React from "react";
import styles from "./EditStep.module.css";
import ItemHeaderTable from "./Table/ItemHeaderTable";
import RowsTableCopy from "./Table/RowsTable";

const EditStep = (props) => {
  return (
    <React.Fragment>
      <div className={styles["grid-container"]}>
        <div className={styles["el--1"]}>
          <ItemHeaderTable text={"Fase"} size={["one-size"]} />
        </div>
        <div className={styles["el--2"]}>
          <RowsTableCopy rows={props.stepName} sendStyles={["four-size"]} />
        </div>
        <div className={styles["el--3"]}>
          <ItemHeaderTable text={"Numero Solleciti"} size={"one-size"} />
        </div>
        <div className={styles["el--4"]}>
          <RowsTableCopy rows={props.stepName} sendStyles={["one-size"]} />
        </div>
        <div className={styles["el--5"]}>
          <ItemHeaderTable text={"Giorni"} size={"two-size"} />
        </div>
        <div className={styles["el--6"]}>
          <RowsTableCopy rows={props.stepName} sendStyles={["one-size"]} />
        </div>
        <div className={styles["el--7"]}>
          <ItemHeaderTable text={"Body Mail"} size={"two-size"} />
        </div>
        <textarea name="body-mail" className={styles["el--8"]}></textarea>
        <div className={styles["el--9"]}>
          <ItemHeaderTable text={"Body pagina"} size={"two-size"} />
        </div>
        <textarea name="body-pagina" className={styles["el--10"]}></textarea>
      </div>
    </React.Fragment>
  );
};

export default EditStep;
