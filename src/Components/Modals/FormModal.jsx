import React from "react";
import styles from "./FormModal.module.css";
import Button from "../Miscellany/Button";

const FormModal = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("La vida");
  };
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
          <Button btnType={"button"} btnText={"Annulla"} btnStyle={"back"} />
          <Button
            btnType={"submit"}
            btnText={props.btnText}
            btnStyle={"create"}
            btnAction={submitHandler}
          />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default FormModal;

//<div className={`${styles[props.style]} ${styles["btn-container"]}`}>
