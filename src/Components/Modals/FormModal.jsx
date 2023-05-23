import React from "react";
import styles from "./FormModal.module.css";
import Button from "../Miscellany/Button";

const FormModal = (props) => {
  return (
    <React.Fragment>
      <div className={styles["modal-container"]}>
        <header className={`${styles.header} ${styles[props.headerType]}`}>
          <h2>{props.headerText}</h2>
        </header>
        <div>{props.children}</div>
        <footer
          className={`${styles["modal-footer"]} ${styles["btn-container"]}`}
        >
          <Button
            btnType={"button"}
            btnStyle={"back"}
            btnAction={props.onClose}
          >
            Annulla
          </Button>
          <Button
            btnType={"submit"}
            btnStyle={"create"}
            btnAction={props.onSubmit}
          >
            {props.btnText}
          </Button>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default FormModal;

//<div className={`${styles[props.style]} ${styles["btn-container"]}`}>
